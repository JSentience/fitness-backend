import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTagWhereInput } from './recipe-tag-where.input';
import { Type } from 'class-transformer';
import { RecipeTagOrderByWithRelationInput } from './recipe-tag-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTagWhereUniqueInput } from './recipe-tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeTagScalarFieldEnum } from './recipe-tag-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeTagArgs {

    @Field(() => RecipeTagWhereInput, {nullable:true})
    @Type(() => RecipeTagWhereInput)
    where?: RecipeTagWhereInput;

    @Field(() => [RecipeTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeTagOrderByWithRelationInput>;

    @Field(() => RecipeTagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeTagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RecipeTagScalarFieldEnum}`>;
}
