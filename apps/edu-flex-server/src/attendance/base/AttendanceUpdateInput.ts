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
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumAttendanceStatus } from "./EnumAttendanceStatus";

@InputType()
class AttendanceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourseWhereUniqueInput)
  @IsOptional()
  @Field(() => CourseWhereUniqueInput, {
    nullable: true,
  })
  course?: CourseWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumAttendanceStatus,
  })
  @IsEnum(EnumAttendanceStatus)
  @IsOptional()
  @Field(() => EnumAttendanceStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  studentId?: string | null;
}

export { AttendanceUpdateInput as AttendanceUpdateInput };
