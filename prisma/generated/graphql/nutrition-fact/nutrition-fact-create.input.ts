import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutNutritionFactInput } from '../recipe/recipe-create-nested-one-without-nutrition-fact.input';

@InputType()
export class NutritionFactCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    proteins!: number;

    @Field(() => Float, {nullable:false})
    fats!: number;

    @Field(() => Float, {nullable:false})
    carbohydrates!: number;

    @Field(() => Float, {nullable:false})
    fiber!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutNutritionFactInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutNutritionFactInput;
}
