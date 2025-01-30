import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { UserService } from 'src/users/providers/users-service';
import { GenerateTokensProvider } from './generate-tokens.provider';
export declare class RefreshTokensProvider {
    private readonly usersService;
    private readonly jwtService;
    private readonly jwtConfiguration;
    private readonly generateTokensProvider;
    constructor(usersService: UserService, jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>, generateTokensProvider: GenerateTokensProvider);
    refershTokens(refershTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
