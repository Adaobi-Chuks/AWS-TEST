import { GetUsersParamDto } from "../dtos/get-users-params.dto";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { UsersCreateManyProvider } from "./users-create-many.provider";
import { CreateManyUserDto } from "../dtos/create-many-users.dto";
import { FindOneUserByEmailProvider } from "./find-one-user-by-email.provider";
import { FindOneByGoogleIdProvider } from "./find-one-by-google-id.provider";
import { CreateGoogleUserProvider } from "./create-google-user.provider";
import { IGoogleUser } from "../interfaces/google-user.interface";
import { CreateUserDto } from "../dtos/create-user.dto";
import { CreateUserProvider } from "./create-user.provider";
export declare class UserService {
    private userRepository;
    private readonly userCreateMnayProvider;
    private readonly findOneUserByEmailProvider;
    private readonly findOneByGoogleIdProvider;
    private readonly createGoogleUserProvider;
    private readonly createUserProvider;
    constructor(userRepository: Repository<User>, userCreateMnayProvider: UsersCreateManyProvider, findOneUserByEmailProvider: FindOneUserByEmailProvider, findOneByGoogleIdProvider: FindOneByGoogleIdProvider, createGoogleUserProvider: CreateGoogleUserProvider, createUserProvider: CreateUserProvider);
    findAll(getUsersParamDto: GetUsersParamDto, limit: number, page: number): void;
    findOneById(id: number): Promise<any>;
    findOneByEmail(email: string): Promise<any>;
    createUser(data: CreateUserDto): Promise<User>;
    createMany(data: CreateManyUserDto): Promise<User[]>;
    findOneByGoogleId(googleId: string): Promise<User>;
    createGoogleUser(googleUser: IGoogleUser): Promise<User>;
}
