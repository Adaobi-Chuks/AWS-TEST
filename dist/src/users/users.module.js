"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./providers/users-service");
const auth_module_1 = require("../auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const config_1 = require("@nestjs/config");
const users_create_many_provider_1 = require("./providers/users-create-many.provider");
const create_user_provider_1 = require("./providers/create-user.provider");
const find_one_user_by_email_provider_1 = require("./providers/find-one-user-by-email.provider");
const profile_config_1 = require("./config/profile.config");
const jwt_config_1 = require("../auth/config/jwt.config");
const jwt_1 = require("@nestjs/jwt");
const find_one_by_google_id_provider_1 = require("./providers/find-one-by-google-id.provider");
const create_google_user_provider_1 = require("./providers/create-google-user.provider");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UserService,
            users_create_many_provider_1.UsersCreateManyProvider,
            create_user_provider_1.CreateUserProvider,
            find_one_user_by_email_provider_1.FindOneUserByEmailProvider,
            find_one_by_google_id_provider_1.FindOneByGoogleIdProvider,
            create_google_user_provider_1.CreateGoogleUserProvider,
        ],
        exports: [users_service_1.UserService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            config_1.ConfigModule.forFeature(profile_config_1.default),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            config_1.ConfigModule.forFeature(jwt_config_1.default),
            jwt_1.JwtModule.registerAsync(jwt_config_1.default.asProvider())
        ]
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map