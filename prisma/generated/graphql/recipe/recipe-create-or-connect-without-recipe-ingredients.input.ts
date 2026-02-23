import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutRecipeIngredientsInput } from './recipe-create-without-recipe-ingredients.input';

@InputType()
export class RecipeCreateOrConnectWithoutRecipeIngredientsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeCreateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutRecipeIngredientsInput)
    create!: RecipeCreateWithoutRecipeIngredientsInput;
}
