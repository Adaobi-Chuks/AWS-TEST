"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appCreate = appCreate;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const aws_sdk_1 = require("aws-sdk");
function appCreate(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true
        }
    }));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle("Blog API Documentation")
        .setDescription("Use this documentation to understand how to interact with the API. Use the base API URL as http://localhost:3000")
        .setTermsOfService("http://localhost:3000/terms-of-service")
        .setLicense("MIT License", "http://www.opensource.org/licenses/mit-license.html")
        .setVersion("1.0")
        .addServer("http://localhost:3000")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    const configService = app.get(config_1.ConfigService);
    aws_sdk_1.config.update({
        credentials: {
            accessKeyId: configService.get('appConfig.awsAccessKeyId'),
            secretAccessKey: configService.get('appConfig.awsSecretAccessKey'),
        },
        region: configService.get('appConfig.awsRegion')
    });
    app.enableCors();
}
//# sourceMappingURL=app.create.js.map