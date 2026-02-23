import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';

@InputType()
export class IngredientWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [IngredientWhereInput], {nullable:true})
    AND?: Array<IngredientWhereInput>;

    @Field(() => [IngredientWhereInput], {nullable:true})
    OR?: Array<IngredientWhereInput>;

    @Field(() => [IngredientWhereInput], {nullable:true})
    NOT?: Array<IngredientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    iconUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    recipesIngridient?: RecipeIngredientListRelationFilter;
}
