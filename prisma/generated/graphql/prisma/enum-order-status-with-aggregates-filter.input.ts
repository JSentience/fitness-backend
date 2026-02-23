import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from './order-status.enum';
import { IntFilter } from './int-filter.input';
import { EnumOrderStatusFilter } from './enum-order-status-filter.input';

@InputType()
export class EnumOrderStatusWithAggregatesFilter {

    @Field(() => OrderStatus, {nullable:true})
    equals?: `${OrderStatus}`;

    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<`${OrderStatus}`>;

    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<`${OrderStatus}`>;

    @Field(() => EnumOrderStatusWithAggregatesFilter, {nullable:true})
    not?: EnumOrderStatusWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumOrderStatusFilter, {nullable:true})
    _min?: EnumOrderStatusFilter;

    @Field(() => EnumOrderStatusFilter, {nullable:true})
    _max?: EnumOrderStatusFilter;
}
