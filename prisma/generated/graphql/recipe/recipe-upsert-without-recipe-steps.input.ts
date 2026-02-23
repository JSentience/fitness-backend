import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutRecipeStepsInput } from './recipe-update-without-recipe-steps.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutRecipeStepsInput } from './recipe-create-without-recipe-steps.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutRecipeStepsInput {

    @Field(() => RecipeUpdateWithoutRecipeStepsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutRecipeStepsInput)
    update!: RecipeUpdateWithoutRecipeStepsInput;

    @Field(() => RecipeCreateWithoutRecipeStepsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutRecipeStepsInput)
    create!: RecipeCreateWithoutRecipeStepsInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
