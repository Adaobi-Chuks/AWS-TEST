import { CreateTagDto } from './dtos/create-tag.dto';
import { TagsService } from './providers/tags.service';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(tag: CreateTagDto): Promise<import("./tag.entity").Tag>;
    softDelete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
