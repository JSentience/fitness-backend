import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IngredientCreateInput } from './ingredient-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneIngredientArgs {

    @Field(() => IngredientCreateInput, {nullable:false})
    @Type(() => IngredientCreateInput)
    data!: IngredientCreateInput;
}
