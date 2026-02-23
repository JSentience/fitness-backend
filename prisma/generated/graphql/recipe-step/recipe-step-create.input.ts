import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutRecipeStepsInput } from '../recipe/recipe-create-nested-one-without-recipe-steps.input';

@InputType()
export class RecipeStepCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutRecipeStepsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutRecipeStepsInput;
}
