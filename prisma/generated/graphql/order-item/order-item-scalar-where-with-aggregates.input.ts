import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OrderItemScalarWhereWithAggregatesInput {

    @Field(() => [OrderItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderItemScalarWhereWithAggregatesInput>;

    @Field(() => [OrderItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderItemScalarWhereWithAggregatesInput>;

    @Field(() => [OrderItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderItemScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeIngredientId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    quantity?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    price?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
