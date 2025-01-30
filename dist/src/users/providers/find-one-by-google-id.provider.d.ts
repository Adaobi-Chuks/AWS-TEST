import { User } from '../user.entity';
import { Repository } from 'typeorm';
export declare class FindOneByGoogleIdProvider {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOneByGoogleId(googleId: string): Promise<User>;
}
