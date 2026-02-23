import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';

@InputType()
export class RecipeTagWhereInput {

    @Field(() => [RecipeTagWhereInput], {nullable:true})
    AND?: Array<RecipeTagWhereInput>;

    @Field(() => [RecipeTagWhereInput], {nullable:true})
    OR?: Array<RecipeTagWhereInput>;

    @Field(() => [RecipeTagWhereInput], {nullable:true})
    NOT?: Array<RecipeTagWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: RecipeListRelationFilter;
}
