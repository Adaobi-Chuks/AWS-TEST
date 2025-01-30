import { User } from '../user.entity';
import { Repository } from 'typeorm';
export declare class FindOneUserByEmailProvider {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOneByEmail(email: string): Promise<any>;
}
