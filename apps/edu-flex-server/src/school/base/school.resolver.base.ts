/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { School } from "./School";
import { SchoolCountArgs } from "./SchoolCountArgs";
import { SchoolFindManyArgs } from "./SchoolFindManyArgs";
import { SchoolFindUniqueArgs } from "./SchoolFindUniqueArgs";
import { CreateSchoolArgs } from "./CreateSchoolArgs";
import { UpdateSchoolArgs } from "./UpdateSchoolArgs";
import { DeleteSchoolArgs } from "./DeleteSchoolArgs";
import { CourseFindManyArgs } from "../../course/base/CourseFindManyArgs";
import { Course } from "../../course/base/Course";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { SchoolService } from "../school.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => School)
export class SchoolResolverBase {
  constructor(
    protected readonly service: SchoolService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "read",
    possession: "any",
  })
  async _schoolsMeta(
    @graphql.Args() args: SchoolCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [School])
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "read",
    possession: "any",
  })
  async schools(@graphql.Args() args: SchoolFindManyArgs): Promise<School[]> {
    return this.service.schools(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => School, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "read",
    possession: "own",
  })
  async school(
    @graphql.Args() args: SchoolFindUniqueArgs
  ): Promise<School | null> {
    const result = await this.service.school(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => School)
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "create",
    possession: "any",
  })
  async createSchool(@graphql.Args() args: CreateSchoolArgs): Promise<School> {
    return await this.service.createSchool({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => School)
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "update",
    possession: "any",
  })
  async updateSchool(
    @graphql.Args() args: UpdateSchoolArgs
  ): Promise<School | null> {
    try {
      return await this.service.updateSchool({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => School)
  @nestAccessControl.UseRoles({
    resource: "School",
    action: "delete",
    possession: "any",
  })
  async deleteSchool(
    @graphql.Args() args: DeleteSchoolArgs
  ): Promise<School | null> {
    try {
      return await this.service.deleteSchool(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Course], { name: "courses" })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async findCourses(
    @graphql.Parent() parent: School,
    @graphql.Args() args: CourseFindManyArgs
  ): Promise<Course[]> {
    const results = await this.service.findCourses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User], { name: "users" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @graphql.Parent() parent: School,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
