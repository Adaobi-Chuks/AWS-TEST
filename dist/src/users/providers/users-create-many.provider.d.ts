import { DataSource } from 'typeorm';
import { User } from '../user.entity';
import { CreateManyUserDto } from '../dtos/create-many-users.dto';
export declare class UsersCreateManyProvider {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    createMany(data: CreateManyUserDto): Promise<User[]>;
}
