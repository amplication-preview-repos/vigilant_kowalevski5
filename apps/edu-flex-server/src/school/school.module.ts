import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SchoolModuleBase } from "./base/school.module.base";
import { SchoolService } from "./school.service";
import { SchoolController } from "./school.controller";
import { SchoolResolver } from "./school.resolver";

@Module({
  imports: [SchoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [SchoolController],
  providers: [SchoolService, SchoolResolver],
  exports: [SchoolService],
})
export class SchoolModule {}
