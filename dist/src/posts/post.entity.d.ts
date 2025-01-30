import { postType } from "./enums/postType.enum";
import { postStatus } from "./enums/postStatus.enum";
import { MetaOption } from "src/meta-options/meta-option.entity";
import { User } from "src/users/user.entity";
import { Tag } from "src/tags/tag.entity";
export declare class Post {
    id: number;
    title: string;
    postType: postType;
    slug: string;
    status: postStatus;
    content?: string;
    schema?: string;
    featuredImageUrl?: string;
    publishOn?: Date;
    metaOptions?: MetaOption;
    tags?: Tag[];
    author: User;
}
