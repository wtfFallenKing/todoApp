import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    profile(id: string): Promise<{
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
        statistics: {
            label: string;
            value: number;
        }[];
    }>;
    updateProfile(id: string, dto: UserDto): Promise<{
        email: string;
        name: string;
    }>;
}
