import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderCountAggregate } from './order-count-aggregate.output';
import { OrderMinAggregate } from './order-min-aggregate.output';
import { OrderMaxAggregate } from './order-max-aggregate.output';

@ObjectType()
export class OrderGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => OrderStatus, {nullable:false})
    status!: `${OrderStatus}`;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: OrderCountAggregate;

    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: OrderMinAggregate;

    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: OrderMaxAggregate;
}
