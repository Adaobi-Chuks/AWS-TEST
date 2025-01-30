import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';
import { GetPostsDto } from './dtos/get-posts.dto';
import { IActiveUser } from 'src/auth/interfaces/active-user.interface';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(userId: string, postQuery: GetPostsDto): Promise<import("../common/pagination/interfaces/paginated.interface").Paginated<import("./post.entity").Post>>;
    createPost(post: CreatePostDto, user: IActiveUser): Promise<import("./post.entity").Post>;
    updatePost(data: PatchPostDto): Promise<any>;
    deletePost(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
