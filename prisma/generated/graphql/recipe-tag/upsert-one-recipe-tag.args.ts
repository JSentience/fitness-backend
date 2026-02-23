import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTagWhereUniqueInput } from './recipe-tag-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeTagCreateInput } from './recipe-tag-create.input';
import { RecipeTagUpdateInput } from './recipe-tag-update.input';

@ArgsType()
export class UpsertOneRecipeTagArgs {

    @Field(() => RecipeTagWhereUniqueInput, {nullable:false})
    @Type(() => RecipeTagWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RecipeTagCreateInput, {nullable:false})
    @Type(() => RecipeTagCreateInput)
    create!: RecipeTagCreateInput;

    @Field(() => RecipeTagUpdateInput, {nullable:false})
    @Type(() => RecipeTagUpdateInput)
    update!: RecipeTagUpdateInput;
}
