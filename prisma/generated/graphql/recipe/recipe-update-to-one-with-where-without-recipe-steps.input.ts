import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutRecipeStepsInput } from './recipe-update-without-recipe-steps.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutRecipeStepsInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutRecipeStepsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutRecipeStepsInput)
    data!: RecipeUpdateWithoutRecipeStepsInput;
}
