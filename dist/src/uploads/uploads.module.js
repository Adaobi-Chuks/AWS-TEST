"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsModule = void 0;
const common_1 = require("@nestjs/common");
const uploads_service_1 = require("./providers/uploads.service");
const upload_to_aws_provider_ts_1 = require("./providers/upload-to-aws-provider.ts");
const uploads_controller_1 = require("./uploads.controller");
const typeorm_1 = require("@nestjs/typeorm");
const upload_entity_1 = require("./upload.entity");
let UploadsModule = class UploadsModule {
};
exports.UploadsModule = UploadsModule;
exports.UploadsModule = UploadsModule = __decorate([
    (0, common_1.Module)({
        controllers: [uploads_controller_1.UploadsController],
        providers: [uploads_service_1.UploadsService, upload_to_aws_provider_ts_1.UploadToAwsProvider],
        imports: [typeorm_1.TypeOrmModule.forFeature([upload_entity_1.Upload])]
    })
], UploadsModule);
//# sourceMappingURL=uploads.module.js.map