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
import { CourseService } from "../course.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CourseCreateInput } from "./CourseCreateInput";
import { Course } from "./Course";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseWhereUniqueInput } from "./CourseWhereUniqueInput";
import { CourseUpdateInput } from "./CourseUpdateInput";
import { AttendanceFindManyArgs } from "../../attendance/base/AttendanceFindManyArgs";
import { Attendance } from "../../attendance/base/Attendance";
import { AttendanceWhereUniqueInput } from "../../attendance/base/AttendanceWhereUniqueInput";
import { GradeFindManyArgs } from "../../grade/base/GradeFindManyArgs";
import { Grade } from "../../grade/base/Grade";
import { GradeWhereUniqueInput } from "../../grade/base/GradeWhereUniqueInput";
import { ScheduleFindManyArgs } from "../../schedule/base/ScheduleFindManyArgs";
import { Schedule } from "../../schedule/base/Schedule";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CourseControllerBase {
  constructor(
    protected readonly service: CourseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Course })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCourse(@common.Body() data: CourseCreateInput): Promise<Course> {
    return await this.service.createCourse({
      data: {
        ...data,

        school: data.school
          ? {
              connect: data.school,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Course] })
  @ApiNestedQuery(CourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async courses(@common.Req() request: Request): Promise<Course[]> {
    const args = plainToClass(CourseFindManyArgs, request.query);
    return this.service.courses({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async course(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    const result = await this.service.course({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCourse(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() data: CourseUpdateInput
  ): Promise<Course | null> {
    try {
      return await this.service.updateCourse({
        where: params,
        data: {
          ...data,

          school: data.school
            ? {
                connect: data.school,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCourse(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    try {
      return await this.service.deleteCourse({
        where: params,
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
  @common.Get("/:id/attendances")
  @ApiNestedQuery(AttendanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  async findAttendances(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Attendance[]> {
    const query = plainToClass(AttendanceFindManyArgs, request.query);
    const results = await this.service.findAttendances(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        status: true,
        studentId: true,
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

  @common.Post("/:id/attendances")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectAttendances(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: AttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendances: {
        connect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/attendances")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateAttendances(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: AttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendances: {
        set: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/attendances")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectAttendances(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: AttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendances: {
        disconnect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/grades")
  @ApiNestedQuery(GradeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "read",
    possession: "any",
  })
  async findGrades(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Grade[]> {
    const query = plainToClass(GradeFindManyArgs, request.query);
    const results = await this.service.findGrades(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        score: true,
        studentId: true,
        typeField: true,
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

  @common.Post("/:id/grades")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectGrades(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: GradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      grades: {
        connect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/grades")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateGrades(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: GradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      grades: {
        set: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/grades")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectGrades(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: GradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      grades: {
        disconnect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/schedules")
  @ApiNestedQuery(ScheduleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "read",
    possession: "any",
  })
  async findSchedules(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Schedule[]> {
    const query = plainToClass(ScheduleFindManyArgs, request.query);
    const results = await this.service.findSchedules(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        teacherId: true,
        time: true,
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

  @common.Post("/:id/schedules")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectSchedules(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedules: {
        connect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/schedules")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateSchedules(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedules: {
        set: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/schedules")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectSchedules(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: ScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedules: {
        disconnect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }
}
