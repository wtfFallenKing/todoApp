import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { INestApplication } from '@nestjs/common';
import { createServer, proxy } from 'aws-serverless-express';
import { Context, APIGatewayProxyEvent, APIGatewayProxyResult, Callback } from 'aws-lambda';

let server: any; // Cache the server
async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });
  await app.init();
  return app;
}

export const handler = async (event: APIGatewayProxyEvent, context: Context, callback: Callback<APIGatewayProxyResult>) => {
  if (!server) {
    const app = await bootstrap();
    server = createServer(app.getHttpAdapter().getInstance());
  }
  proxy(server, event, context, 'PROMISE').promise
  .then(result => {
      callback(null,result)
    })
  .catch(error => {
    callback(error);
  });
};