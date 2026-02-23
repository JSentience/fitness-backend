import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderOrderByWithRelationInput } from './order-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderCountAggregateInput } from './order-count-aggregate.input';
import { OrderMinAggregateInput } from './order-min-aggregate.input';
import { OrderMaxAggregateInput } from './order-max-aggregate.input';

@ArgsType()
export class OrderAggregateArgs {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: OrderCountAggregateInput;

    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: OrderMinAggregateInput;

    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: OrderMaxAggregateInput;
}
