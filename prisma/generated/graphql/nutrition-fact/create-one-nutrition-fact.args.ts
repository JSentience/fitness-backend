import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionFactCreateInput } from './nutrition-fact-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNutritionFactArgs {

    @Field(() => NutritionFactCreateInput, {nullable:false})
    @Type(() => NutritionFactCreateInput)
    data!: NutritionFactCreateInput;
}
