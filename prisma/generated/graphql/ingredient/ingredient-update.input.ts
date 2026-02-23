import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientUpdateManyWithoutIngredientNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-ingredient-nested.input';

@InputType()
export class IngredientUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUpdateManyWithoutIngredientNestedInput, {nullable:true})
    recipesIngridient?: RecipeIngredientUpdateManyWithoutIngredientNestedInput;
}
