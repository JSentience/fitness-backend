import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { EnumUnitWithAggregatesFilter } from '../prisma/enum-unit-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RecipeIngredientScalarWhereWithAggregatesInput {

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    quantity?: FloatWithAggregatesFilter;

    @Field(() => EnumUnitWithAggregatesFilter, {nullable:true})
    unit?: EnumUnitWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ingredientId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
