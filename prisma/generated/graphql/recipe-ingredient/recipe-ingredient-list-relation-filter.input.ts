import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';

@InputType()
export class RecipeIngredientListRelationFilter {

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    every?: RecipeIngredientWhereInput;

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    some?: RecipeIngredientWhereInput;

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    none?: RecipeIngredientWhereInput;
}
