import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTagUpdateInput } from './recipe-tag-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTagWhereUniqueInput } from './recipe-tag-where-unique.input';

@ArgsType()
export class UpdateOneRecipeTagArgs {

    @Field(() => RecipeTagUpdateInput, {nullable:false})
    @Type(() => RecipeTagUpdateInput)
    data!: RecipeTagUpdateInput;

    @Field(() => RecipeTagWhereUniqueInput, {nullable:false})
    @Type(() => RecipeTagWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>;
}
