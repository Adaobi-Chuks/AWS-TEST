import { CreateUserDto } from '../dtos/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { MailService } from 'src/mail/providers/mail.service';
export declare class CreateUserProvider {
    private userRepository;
    private readonly hashingProvider;
    private readonly mailService;
    constructor(userRepository: Repository<User>, hashingProvider: HashingProvider, mailService: MailService);
    createUser(user: CreateUserDto): Promise<User>;
}
