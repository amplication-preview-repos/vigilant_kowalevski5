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
import { CourseCreateNestedManyWithoutSchoolsInput } from "./CourseCreateNestedManyWithoutSchoolsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutSchoolsInput } from "./UserCreateNestedManyWithoutSchoolsInput";

@InputType()
class SchoolCreateInput {
  @ApiProperty({
    required: false,
    type: () => CourseCreateNestedManyWithoutSchoolsInput,
  })
  @ValidateNested()
  @Type(() => CourseCreateNestedManyWithoutSchoolsInput)
  @IsOptional()
  @Field(() => CourseCreateNestedManyWithoutSchoolsInput, {
    nullable: true,
  })
  courses?: CourseCreateNestedManyWithoutSchoolsInput;

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
    type: () => UserCreateNestedManyWithoutSchoolsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutSchoolsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutSchoolsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutSchoolsInput;
}

export { SchoolCreateInput as SchoolCreateInput };