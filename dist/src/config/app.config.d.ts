declare const _default: (() => {
    environment: string;
    apiVersion: string;
    awsBucketName: string;
    awsCloudFrontUrl: string;
    awsAccessKeyId: string;
    awsSecretAccessKey: string;
    awsRegion: string;
    mailHost: string;
    smptUsername: string;
    smptPassword: string;
    mailPort: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    environment: string;
    apiVersion: string;
    awsBucketName: string;
    awsCloudFrontUrl: string;
    awsAccessKeyId: string;
    awsSecretAccessKey: string;
    awsRegion: string;
    mailHost: string;
    smptUsername: string;
    smptPassword: string;
    mailPort: string;
}>;
export default _default;
