import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';
export declare class MetaOptionsController {
    private readonly metaOptionsService;
    constructor(metaOptionsService: MetaOptionsService);
    create(postMetaOptions: CreatePostMetaOptionsDto): Promise<import("./meta-option.entity").MetaOption>;
}
