import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DevProjectModuleBase } from "./base/devProject.module.base";
import { DevProjectService } from "./devProject.service";
import { DevProjectController } from "./devProject.controller";
import { DevProjectResolver } from "./devProject.resolver";

@Module({
  imports: [DevProjectModuleBase, forwardRef(() => AuthModule)],
  controllers: [DevProjectController],
  providers: [DevProjectService, DevProjectResolver],
  exports: [DevProjectService],
})
export class DevProjectModule {}
