import { AuthService } from './providers/auth.service';
import { SignInDto } from './dtos/signin.dto';
import { RefreshTokenDto } from './dtos/refresh-token.dto';
import { RefreshTokensProvider } from './providers/refresh-tokens.provider';
export declare class AuthController {
    private readonly authService;
    private readonly refreshTokenProvider;
    constructor(authService: AuthService, refreshTokenProvider: RefreshTokensProvider);
    sigIn(data: SignInDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
