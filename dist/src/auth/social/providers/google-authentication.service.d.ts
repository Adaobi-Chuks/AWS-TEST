import { OnModuleInit } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import jwtConfig from 'src/auth/config/jwt.config';
import { GoogleTokenDto } from '../dtos/google-token.dto';
import { UserService } from 'src/users/providers/users-service';
import { GenerateTokensProvider } from 'src/auth/providers/generate-tokens.provider';
export declare class GoogleAuthenticationService implements OnModuleInit {
    private readonly usersService;
    private readonly jwtConfiguration;
    private readonly generateTokensProvider;
    private oauthClient;
    constructor(usersService: UserService, jwtConfiguration: ConfigType<typeof jwtConfig>, generateTokensProvider: GenerateTokensProvider);
    onModuleInit(): void;
    authenticate(googleTokenDto: GoogleTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
