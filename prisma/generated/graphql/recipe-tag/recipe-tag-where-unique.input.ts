import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTagWhereInput } from './recipe-tag-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';

@InputType()
export class RecipeTagWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [RecipeTagWhereInput], {nullable:true})
    AND?: Array<RecipeTagWhereInput>;

    @Field(() => [RecipeTagWhereInput], {nullable:true})
    OR?: Array<RecipeTagWhereInput>;

    @Field(() => [RecipeTagWhereInput], {nullable:true})
    NOT?: Array<RecipeTagWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: RecipeListRelationFilter;
}
