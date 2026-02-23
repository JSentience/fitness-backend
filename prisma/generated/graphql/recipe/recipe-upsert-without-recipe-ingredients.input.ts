import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutRecipeIngredientsInput } from './recipe-update-without-recipe-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutRecipeIngredientsInput } from './recipe-create-without-recipe-ingredients.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutRecipeIngredientsInput {

    @Field(() => RecipeUpdateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutRecipeIngredientsInput)
    update!: RecipeUpdateWithoutRecipeIngredientsInput;

    @Field(() => RecipeCreateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutRecipeIngredientsInput)
    create!: RecipeCreateWithoutRecipeIngredientsInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
