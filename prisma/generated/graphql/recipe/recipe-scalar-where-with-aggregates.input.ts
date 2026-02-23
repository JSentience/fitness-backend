import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumDifficultyWithAggregatesFilter } from '../prisma/enum-difficulty-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RecipeScalarWhereWithAggregatesInput {

    @Field(() => [RecipeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    calories?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cookingTime?: IntWithAggregatesFilter;

    @Field(() => EnumDifficultyWithAggregatesFilter, {nullable:true})
    difficulty?: EnumDifficultyWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
