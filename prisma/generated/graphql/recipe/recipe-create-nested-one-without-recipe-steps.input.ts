import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutRecipeStepsInput } from './recipe-create-without-recipe-steps.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutRecipeStepsInput } from './recipe-create-or-connect-without-recipe-steps.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutRecipeStepsInput {

    @Field(() => RecipeCreateWithoutRecipeStepsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutRecipeStepsInput)
    create?: RecipeCreateWithoutRecipeStepsInput;

    @Field(() => RecipeCreateOrConnectWithoutRecipeStepsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutRecipeStepsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeStepsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;
}
