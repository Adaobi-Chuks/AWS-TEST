import { UserService } from 'src/users/providers/users-service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { GetPostsDto } from '../dtos/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { CreatePostProvider } from './create-post.provider';
import { IActiveUser } from 'src/auth/interfaces/active-user.interface';
export declare class PostsService {
    private readonly postsRepository;
    private readonly metaOptionsRepository;
    private readonly paginationProvider;
    private readonly usersService;
    private readonly tagsService;
    private readonly createPostProvider;
    constructor(postsRepository: Repository<Post>, metaOptionsRepository: Repository<MetaOption>, paginationProvider: PaginationProvider, usersService: UserService, tagsService: TagsService, createPostProvider: CreatePostProvider);
    createPost(post: CreatePostDto, user: IActiveUser): Promise<Post>;
    findAll(postQuery: GetPostsDto, userId: string): Promise<Paginated<Post>>;
    update(data: PatchPostDto): Promise<any>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
