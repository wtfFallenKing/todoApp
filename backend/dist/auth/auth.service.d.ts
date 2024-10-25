import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
import { Response } from 'express';
export declare class AuthService {
    private jwt;
    private userService;
    constructor(jwt: JwtService, userService: UserService);
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            email: string;
            workInterval: number | null;
            breakInterval: number | null;
            intervalsCount: number | null;
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            email: string;
            workInterval: number | null;
            breakInterval: number | null;
            intervalsCount: number | null;
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    private issueTokens;
    private validateUser;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            tasks: {
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                priority: import("prisma/generated/client").$Enums.Priority | null;
                isCompleted: boolean | null;
                userId: string;
            }[];
            email: string;
            workInterval: number | null;
            breakInterval: number | null;
            intervalsCount: number | null;
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    removeRefreshTokenFromResponse(res: Response): void;
}
