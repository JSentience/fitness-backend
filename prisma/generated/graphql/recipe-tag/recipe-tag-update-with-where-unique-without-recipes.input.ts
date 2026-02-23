import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTagWhereUniqueInput } from './recipe-tag-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeTagUpdateWithoutRecipesInput } from './recipe-tag-update-without-recipes.input';

@InputType()
export class RecipeTagUpdateWithWhereUniqueWithoutRecipesInput {

    @Field(() => RecipeTagWhereUniqueInput, {nullable:false})
    @Type(() => RecipeTagWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RecipeTagUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => RecipeTagUpdateWithoutRecipesInput)
    data!: RecipeTagUpdateWithoutRecipesInput;
}
