/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Attendance } from "../../attendance/base/Attendance";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Grade } from "../../grade/base/Grade";
import { Schedule } from "../../schedule/base/Schedule";
import { School } from "../../school/base/School";

@ObjectType()
class Course {
  @ApiProperty({
    required: false,
    type: () => [Attendance],
  })
  @ValidateNested()
  @Type(() => Attendance)
  @IsOptional()
  attendances?: Array<Attendance>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Grade],
  })
  @ValidateNested()
  @Type(() => Grade)
  @IsOptional()
  grades?: Array<Grade>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Schedule],
  })
  @ValidateNested()
  @Type(() => Schedule)
  @IsOptional()
  schedules?: Array<Schedule>;

  @ApiProperty({
    required: false,
    type: () => School,
  })
  @ValidateNested()
  @Type(() => School)
  @IsOptional()
  school?: School | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  teacherId!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Course as Course };