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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dtos/create-user.dto");
const patch_user_dto_1 = require("./dtos/patch-user.dto");
const users_service_1 = require("./providers/users-service");
const get_users_params_dto_1 = require("./dtos/get-users-params.dto");
const swagger_1 = require("@nestjs/swagger");
const create_many_users_dto_1 = require("./dtos/create-many-users.dto");
const auth_decorator_1 = require("../auth/decorator/auth.decorator");
const auth_type_enum_1 = require("../auth/enums/auth-type.enum");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getUsers(params, limit, page) {
        return this.usersService.findAll(params, limit, page);
    }
    createUsers(user) {
        return this.usersService.createUser(user);
    }
    createManyUsers(users) {
        return this.usersService.createMany(users);
    }
    patchUser(data) {
        return data;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)("/:id?"),
    (0, swagger_1.ApiOperation)({
        summary: "Fetches a list of registered users on the application",
        description: "This endpoint returns a list of users based off the inputted query and params."
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        type: Number,
        description: "The number of users returned per query.",
        example: 10
    }),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        type: Number,
        description: "The page number you want the api to return.",
        example: 1
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "The list of users was successfully returned."
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)("limit", new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)("page", new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_params_dto_1.GetUsersParamDto, Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUsers", null);
__decorate([
    (0, common_1.Post)("create-many"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_many_users_dto_1.CreateManyUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createManyUsers", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_user_dto_1.PatchUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "patchUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)("Users"),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UsersController);
//# sourceMappingURL=users.controller.js.map