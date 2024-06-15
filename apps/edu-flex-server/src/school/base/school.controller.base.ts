/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SchoolService } from "../school.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SchoolCreateInput } from "./SchoolCreateInput";
import { School } from "./School";
import { SchoolFindManyArgs } from "./SchoolFindManyArgs";
import { SchoolWhereUniqueInput } from "./SchoolWhereUniqueInput";
import { SchoolUpdateInput } from "./SchoolUpdateInput";
import { CourseFindManyArgs } from "../../course/base/CourseFindManyArgs";
import { Course } from "../../course/base/Course";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SchoolControllerBase {
  constructor(
    protected readonly service: SchoolService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: School })
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSchool(@common.Body() data: SchoolCreateInput): Promise<School> {
    return await this.service.createSchool({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [School] })
  @ApiNestedQuery(SchoolFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async schools(@common.Req() request: Request): Promise<School[]> {
    const args = plainToClass(SchoolFindManyArgs, request.query);
    return this.service.schools({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: School })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async school(
    @common.Param() params: SchoolWhereUniqueInput
  ): Promise<School | null> {
    const result = await this.service.school({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: School })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSchool(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() data: SchoolUpdateInput
  ): Promise<School | null> {
    try {
      return await this.service.updateSchool({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: School })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSchool(
    @common.Param() params: SchoolWhereUniqueInput
  ): Promise<School | null> {
    try {
      return await this.service.deleteSchool({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/courses")
  @ApiNestedQuery(CourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async findCourses(
    @common.Req() request: Request,
    @common.Param() params: SchoolWhereUniqueInput
  ): Promise<Course[]> {
    const query = plainToClass(CourseFindManyArgs, request.query);
    const results = await this.service.findCourses(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        school: {
          select: {
            id: true,
          },
        },

        teacherId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/courses")
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "update",
    possession: "any",
  })
  async connectCourses(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        connect: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/courses")
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "update",
    possession: "any",
  })
  async updateCourses(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        set: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/courses")
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "update",
    possession: "any",
  })
  async disconnectCourses(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        disconnect: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: SchoolWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        role: true,
        roles: true,

        school: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }
}
