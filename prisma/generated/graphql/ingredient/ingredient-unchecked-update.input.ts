import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-ingredient-nested.input';

@InputType()
export class IngredientUncheckedUpdateInput {

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

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput, {nullable:true})
    recipesIngridient?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput;
}
