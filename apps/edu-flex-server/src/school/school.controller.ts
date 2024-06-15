import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SchoolService } from "./school.service";
import { SchoolControllerBase } from "./base/school.controller.base";

@swagger.ApiTags("schools")
@common.Controller("schools")
export class SchoolController extends SchoolControllerBase {
  constructor(
    protected readonly service: SchoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
