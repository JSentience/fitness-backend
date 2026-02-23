import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutRecipeIngredientsInput } from './recipe-update-without-recipe-ingredients.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutRecipeIngredientsInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutRecipeIngredientsInput)
    data!: RecipeUpdateWithoutRecipeIngredientsInput;
}
