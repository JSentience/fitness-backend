import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeStepWhereUniqueInput } from './recipe-step-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeStepUpdateWithoutRecipeInput } from './recipe-step-update-without-recipe.input';

@InputType()
export class RecipeStepUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeStepWhereUniqueInput, {nullable:false})
    @Type(() => RecipeStepWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>;

    @Field(() => RecipeStepUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeStepUpdateWithoutRecipeInput)
    data!: RecipeStepUpdateWithoutRecipeInput;
}
