import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientCreateInput } from './recipe-ingredient-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeIngredientArgs {

    @Field(() => RecipeIngredientCreateInput, {nullable:false})
    @Type(() => RecipeIngredientCreateInput)
    data!: RecipeIngredientCreateInput;
}
