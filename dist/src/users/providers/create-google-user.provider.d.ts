import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { IGoogleUser } from '../interfaces/google-user.interface';
export declare class CreateGoogleUserProvider {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createGoogleUser(googleUser: IGoogleUser): Promise<User>;
}
