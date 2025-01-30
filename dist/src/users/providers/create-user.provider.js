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
exports.CreateUserProvider = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user.entity");
const hashing_provider_1 = require("../../auth/providers/hashing.provider");
const mail_service_1 = require("../../mail/providers/mail.service");
let CreateUserProvider = class CreateUserProvider {
    constructor(userRepository, hashingProvider, mailService) {
        this.userRepository = userRepository;
        this.hashingProvider = hashingProvider;
        this.mailService = mailService;
    }
    async createUser(user) {
        let existingUser = undefined;
        try {
            existingUser = await this.userRepository.findOne({
                where: {
                    email: user.email
                }
            });
        }
        catch (error) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later.", {
                description: "Error connecting to the database"
            });
        }
        if (existingUser)
            throw new common_1.BadRequestException("User already exists.");
        let newUser = this.userRepository.create({
            ...user,
            password: await this.hashingProvider.hashPassword(user.password)
        });
        try {
            newUser = await this.userRepository.save(newUser);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later.", {
                description: "Error connecting to the database"
            });
        }
        try {
            await this.mailService.sendUserWelcome(newUser);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException(error.message);
        }
        return newUser;
    }
};
exports.CreateUserProvider = CreateUserProvider;
exports.CreateUserProvider = CreateUserProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => hashing_provider_1.HashingProvider))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        hashing_provider_1.HashingProvider,
        mail_service_1.MailService])
], CreateUserProvider);
//# sourceMappingURL=create-user.provider.js.map