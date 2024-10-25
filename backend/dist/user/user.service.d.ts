import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): import("prisma/generated/client").Prisma.Prisma__UserClient<{
        tasks: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            priority: import("prisma/generated/client").$Enums.Priority | null;
            isCompleted: boolean | null;
            userId: string;
        }[];
    } & {
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalsCount: number | null;
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("prisma/generated/client/runtime/library").DefaultArgs>;
    getByEmail(email: string): import("prisma/generated/client").Prisma.Prisma__UserClient<{
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalsCount: number | null;
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("prisma/generated/client/runtime/library").DefaultArgs>;
    getProfile(id: string): Promise<{
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
    create(dto: AuthDto): Promise<{
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalsCount: number | null;
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UserDto): Promise<{
        email: string;
        name: string;
    }>;
}
