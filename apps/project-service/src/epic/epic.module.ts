import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EpicModuleBase } from "./base/epic.module.base";
import { EpicService } from "./epic.service";
import { EpicController } from "./epic.controller";
import { EpicResolver } from "./epic.resolver";

@Module({
  imports: [EpicModuleBase, forwardRef(() => AuthModule)],
  controllers: [EpicController],
  providers: [EpicService, EpicResolver],
  exports: [EpicService],
})
export class EpicModule {}
