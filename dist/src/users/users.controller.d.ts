import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './providers/users-service';
import { GetUsersParamDto } from './dtos/get-users-params.dto';
import { CreateManyUserDto } from './dtos/create-many-users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UserService);
    getUsers(params: GetUsersParamDto, limit: number | undefined, page: number | undefined): void;
    createUsers(user: CreateUserDto): Promise<import("./user.entity").User>;
    createManyUsers(users: CreateManyUserDto): Promise<import("./user.entity").User[]>;
    patchUser(data: PatchUserDto): PatchUserDto;
}
