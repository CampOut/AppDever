import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DevProjectService } from "./devProject.service";
import { DevProjectControllerBase } from "./base/devProject.controller.base";

@swagger.ApiTags("devProjects")
@common.Controller("devProjects")
export class DevProjectController extends DevProjectControllerBase {
  constructor(
    protected readonly service: DevProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
