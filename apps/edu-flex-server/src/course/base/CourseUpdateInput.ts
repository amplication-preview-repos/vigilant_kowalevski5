/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceUpdateManyWithoutCoursesInput } from "./AttendanceUpdateManyWithoutCoursesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { GradeUpdateManyWithoutCoursesInput } from "./GradeUpdateManyWithoutCoursesInput";
import { ScheduleUpdateManyWithoutCoursesInput } from "./ScheduleUpdateManyWithoutCoursesInput";
import { SchoolWhereUniqueInput } from "../../school/base/SchoolWhereUniqueInput";

@InputType()
class CourseUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => AttendanceUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => AttendanceUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  attendances?: AttendanceUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => GradeUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => GradeUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => GradeUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  grades?: GradeUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ScheduleUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => ScheduleUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => ScheduleUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  schedules?: ScheduleUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => SchoolWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SchoolWhereUniqueInput)
  @IsOptional()
  @Field(() => SchoolWhereUniqueInput, {
    nullable: true,
  })
  school?: SchoolWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  teacherId?: string | null;
}

export { CourseUpdateInput as CourseUpdateInput };