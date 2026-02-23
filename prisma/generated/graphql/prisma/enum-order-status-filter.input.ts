import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from './order-status.enum';

@InputType()
export class EnumOrderStatusFilter {

    @Field(() => OrderStatus, {nullable:true})
    equals?: `${OrderStatus}`;

    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<`${OrderStatus}`>;

    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<`${OrderStatus}`>;

    @Field(() => EnumOrderStatusFilter, {nullable:true})
    not?: EnumOrderStatusFilter;
}
