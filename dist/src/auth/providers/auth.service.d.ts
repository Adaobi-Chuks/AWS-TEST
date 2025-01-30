import { UserService } from 'src/users/providers/users-service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';
import { RefreshTokensProvider } from './refresh-tokens.provider';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly signInProvider;
    private readonly refreshTokensProvider;
    constructor(usersService: UserService, signInProvider: SignInProvider, refreshTokensProvider: RefreshTokensProvider);
    signIn(data: SignInDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    isAuthenticated(): boolean;
}
