"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokensProvider = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("../config/jwt.config");
const users_service_1 = require("../../users/providers/users-service");
const generate_tokens_provider_1 = require("./generate-tokens.provider");
let RefreshTokensProvider = class RefreshTokensProvider {
    constructor(usersService, jwtService, jwtConfiguration, generateTokensProvider) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.jwtConfiguration = jwtConfiguration;
        this.generateTokensProvider = generateTokensProvider;
    }
    async refershTokens(refershTokenDto) {
        try {
            const { sub } = await this.jwtService.verifyAsync(refershTokenDto.refreshToken, {
                audience: this.jwtConfiguration.audience,
                issuer: this.jwtConfiguration.issuer,
                secret: this.jwtConfiguration.secret
            });
            const user = await this.usersService.findOneById(sub);
            return await this.generateTokensProvider.generateTokens(user);
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
};
exports.RefreshTokensProvider = RefreshTokensProvider;
exports.RefreshTokensProvider = RefreshTokensProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UserService))),
    __param(2, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __metadata("design:paramtypes", [users_service_1.UserService,
        jwt_1.JwtService, void 0, generate_tokens_provider_1.GenerateTokensProvider])
], RefreshTokensProvider);
//# sourceMappingURL=refresh-tokens.provider.js.map