import { Repository } from 'typeorm';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Tag } from '../tag.entity';
export declare class TagsService {
    private readonly tagsRepository;
    constructor(tagsRepository: Repository<Tag>);
    createTag(tag: CreateTagDto): Promise<Tag>;
    findMultipleTags(tags: number[]): Promise<Tag[]>;
    softRemove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
