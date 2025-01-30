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
exports.CreatePostProvider = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../../users/providers/users-service");
const tags_service_1 = require("../../tags/providers/tags.service");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("../post.entity");
let CreatePostProvider = class CreatePostProvider {
    constructor(postsRepository, usersService, tagsService) {
        this.postsRepository = postsRepository;
        this.usersService = usersService;
        this.tagsService = tagsService;
    }
    async createPost(post, user) {
        let author = undefined;
        let tags = undefined;
        try {
            author = await this.usersService.findOneById(user.sub);
            tags = await this.tagsService.findMultipleTags(post.tags);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
        if (!post.tags.length !== tags.length) {
            throw new common_1.BadRequestException("Some tags were not found");
        }
        try {
            return this.postsRepository.create({
                ...post,
                author: author,
                tags: tags
            });
        }
        catch (error) {
            throw new common_1.ConflictException(error, {
                description: "Ensure slug is unique"
            });
        }
    }
};
exports.CreatePostProvider = CreatePostProvider;
exports.CreatePostProvider = CreatePostProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UserService,
        tags_service_1.TagsService])
], CreatePostProvider);
//# sourceMappingURL=create-post.provider.js.map