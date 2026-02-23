import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeUpdateOneRequiredWithoutRecipeStepsNestedInput } from '../recipe/recipe-update-one-required-without-recipe-steps-nested.input';

@InputType()
export class RecipeStepUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutRecipeStepsNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutRecipeStepsNestedInput;
}
