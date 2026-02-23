import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutRecipeStepsInput } from './recipe-create-without-recipe-steps.input';

@InputType()
export class RecipeCreateOrConnectWithoutRecipeStepsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeCreateWithoutRecipeStepsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutRecipeStepsInput)
    create!: RecipeCreateWithoutRecipeStepsInput;
}
