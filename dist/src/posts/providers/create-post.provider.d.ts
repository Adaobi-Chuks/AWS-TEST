import { CreatePostDto } from '../dtos/create-post.dto';
import { UserService } from 'src/users/providers/users-service';
import { TagsService } from 'src/tags/providers/tags.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { IActiveUser } from 'src/auth/interfaces/active-user.interface';
export declare class CreatePostProvider {
    private readonly postsRepository;
    private readonly usersService;
    private readonly tagsService;
    constructor(postsRepository: Repository<Post>, usersService: UserService, tagsService: TagsService);
    createPost(post: CreatePostDto, user: IActiveUser): Promise<Post>;
}
