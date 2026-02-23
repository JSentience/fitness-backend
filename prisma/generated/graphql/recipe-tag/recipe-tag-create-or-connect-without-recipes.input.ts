import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTagWhereUniqueInput } from './recipe-tag-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeTagCreateWithoutRecipesInput } from './recipe-tag-create-without-recipes.input';

@InputType()
export class RecipeTagCreateOrConnectWithoutRecipesInput {

    @Field(() => RecipeTagWhereUniqueInput, {nullable:false})
    @Type(() => RecipeTagWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RecipeTagCreateWithoutRecipesInput, {nullable:false})
    @Type(() => RecipeTagCreateWithoutRecipesInput)
    create!: RecipeTagCreateWithoutRecipesInput;
}
