import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
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
    register(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
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
    logout(res: Response): Promise<boolean>;
    getNewTokens(req: Request, res: Response): Promise<{
        accessToken: string;
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
}
