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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/providers/users-service");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("../post.entity");
const typeorm_2 = require("typeorm");
const meta_option_entity_1 = require("../../meta-options/meta-option.entity");
const tags_service_1 = require("../../tags/providers/tags.service");
const pagination_provider_1 = require("../../common/pagination/providers/pagination.provider");
const create_post_provider_1 = require("./create-post.provider");
let PostsService = class PostsService {
    constructor(postsRepository, metaOptionsRepository, paginationProvider, usersService, tagsService, createPostProvider) {
        this.postsRepository = postsRepository;
        this.metaOptionsRepository = metaOptionsRepository;
        this.paginationProvider = paginationProvider;
        this.usersService = usersService;
        this.tagsService = tagsService;
        this.createPostProvider = createPostProvider;
    }
    async createPost(post, user) {
        return await this.createPostProvider.createPost(post, user);
    }
    async findAll(postQuery, userId) {
        const posts = await this.paginationProvider.paginateQuery({
            limit: postQuery.limit,
            page: postQuery.page
        }, this.postsRepository);
        return posts;
    }
    async update(data) {
        let tags = undefined;
        try {
            tags = await this.tagsService.findMultipleTags(data.tags);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later.", {
                description: "Error connecting to the database"
            });
        }
        if (!tags)
            throw new common_1.NotFoundException("Tags not found");
        if (tags.length !== data.tags.length)
            throw new common_1.NotFoundException("Some tags weren't found");
        let post = undefined;
        try {
            post = await this.postsRepository.findOneBy({ id: data.id });
        }
        catch (error) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later.", {
                description: "Error connecting to the database"
            });
        }
        if (!post)
            throw new common_1.NotFoundException("Posts not found");
        post.title = data.title ?? post.title;
        post.content = data.content ?? post.content;
        post.status = data.status ?? post.status;
        post.postType = data.postType ?? post.postType;
        post.slug = data.slug ?? post.slug;
        post.featuredImageUrl = data.featuredImageUrl ?? post.featuredImageUrl;
        post.publishOn = data.publishOn ?? post.publishOn;
        post.tags = tags;
        try {
            await this.postsRepository.save(post);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later.", {
                description: "Error connecting to the database"
            });
        }
        return post;
    }
    async delete(id) {
        await this.postsRepository.delete(id);
        return { deleted: true, id };
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(meta_option_entity_1.MetaOption)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        pagination_provider_1.PaginationProvider,
        users_service_1.UserService,
        tags_service_1.TagsService,
        create_post_provider_1.CreatePostProvider])
], PostsService);
//# sourceMappingURL=posts.service.js.map