/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EpicWhereUniqueInput } from "../../epic/base/EpicWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EpicCreateNestedManyWithoutDevProjectsInput {
  @Field(() => [EpicWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EpicWhereUniqueInput],
  })
  connect?: Array<EpicWhereUniqueInput>;
}

export { EpicCreateNestedManyWithoutDevProjectsInput as EpicCreateNestedManyWithoutDevProjectsInput };
