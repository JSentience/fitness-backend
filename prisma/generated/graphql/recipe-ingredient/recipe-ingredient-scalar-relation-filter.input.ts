import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';

@InputType()
export class RecipeIngredientScalarRelationFilter {

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    is?: RecipeIngredientWhereInput;

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    isNot?: RecipeIngredientWhereInput;
}
