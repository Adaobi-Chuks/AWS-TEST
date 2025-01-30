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
var AuthenticationGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const access_token_guard_1 = require("../access-token/access-token.guard");
const auth_type_enum_1 = require("../../enums/auth-type.enum");
const auth_constants_1 = require("../../constants/auth.constants");
let AuthenticationGuard = AuthenticationGuard_1 = class AuthenticationGuard {
    constructor(reflector, accessTokenGaurd) {
        this.reflector = reflector;
        this.accessTokenGaurd = accessTokenGaurd;
        this.authTypeGuardmap = {
            [auth_type_enum_1.AuthType.Bearer]: this.accessTokenGaurd,
            [auth_type_enum_1.AuthType.None]: { canActivate: () => true }
        };
    }
    async canActivate(context) {
        const authTypes = this.reflector.getAllAndOverride(auth_constants_1.AUTH_TYPE_KEY, [context.getHandler(), context.getClass()]) ?? [AuthenticationGuard_1.defaultAuthType];
        const guards = authTypes.map((authType) => this.authTypeGuardmap[authType]).flat();
        const error = new common_1.UnauthorizedException();
        for (const guard of guards) {
            const canActivate = await Promise.resolve(guard.canActivate(context)).catch((err) => {
                error: err;
            });
            if (canActivate) {
                return true;
            }
        }
        throw error;
    }
};
exports.AuthenticationGuard = AuthenticationGuard;
AuthenticationGuard.defaultAuthType = auth_type_enum_1.AuthType.Bearer;
exports.AuthenticationGuard = AuthenticationGuard = AuthenticationGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        access_token_guard_1.AccessTokenGuard])
], AuthenticationGuard);
//# sourceMappingURL=authentication.guard.js.map