/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DevProjectWhereInput } from "./DevProjectWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DevProjectOrderByInput } from "./DevProjectOrderByInput";

@ArgsType()
class DevProjectFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DevProjectWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DevProjectWhereInput, { nullable: true })
  @Type(() => DevProjectWhereInput)
  where?: DevProjectWhereInput;

  @ApiProperty({
    required: false,
    type: [DevProjectOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DevProjectOrderByInput], { nullable: true })
  @Type(() => DevProjectOrderByInput)
  orderBy?: Array<DevProjectOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DevProjectFindManyArgs as DevProjectFindManyArgs };
