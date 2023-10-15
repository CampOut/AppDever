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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { DevProjectWhereUniqueInput } from "../../devProject/base/DevProjectWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class EpicCreateInput {
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
    type: () => DevProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DevProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => DevProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: DevProjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tite?: string | null;
}

export { EpicCreateInput as EpicCreateInput };
