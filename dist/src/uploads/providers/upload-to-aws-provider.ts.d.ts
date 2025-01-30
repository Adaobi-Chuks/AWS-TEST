import { ConfigService } from '@nestjs/config';
export declare class UploadToAwsProvider {
    private readonly configServie;
    constructor(configServie: ConfigService);
    uploadFile(file: Express.Multer.File): Promise<string>;
    generateFileName(file: Express.Multer.File): string;
}
