import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTagWhereUniqueInput } from './recipe-tag-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneRecipeTagArgs {

    @Field(() => RecipeTagWhereUniqueInput, {nullable:false})
    @Type(() => RecipeTagWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>;
}
