import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DevProjectServiceBase } from "./base/devProject.service.base";

@Injectable()
export class DevProjectService extends DevProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
