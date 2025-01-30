import { UserService } from 'src/users/providers/users-service';
import { SignInDto } from '../dtos/signin.dto';
import { HashingProvider } from './hashing.provider';
import { GenerateTokensProvider } from './generate-tokens.provider';
export declare class SignInProvider {
    private readonly usersService;
    private readonly hashingProvider;
    private readonly generateTokensProvider;
    constructor(usersService: UserService, hashingProvider: HashingProvider, generateTokensProvider: GenerateTokensProvider);
    signIn(data: SignInDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
