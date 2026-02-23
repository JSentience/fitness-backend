import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumOrderStatusWithAggregatesFilter } from '../prisma/enum-order-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OrderScalarWhereWithAggregatesInput {

    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderScalarWhereWithAggregatesInput>;

    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderScalarWhereWithAggregatesInput>;

    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    orderId?: StringWithAggregatesFilter;

    @Field(() => EnumOrderStatusWithAggregatesFilter, {nullable:true})
    status?: EnumOrderStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
