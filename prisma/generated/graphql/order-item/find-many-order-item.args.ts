import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';
import { Type } from 'class-transformer';
import { OrderItemOrderByWithRelationInput } from './order-item-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderItemScalarFieldEnum } from './order-item-scalar-field.enum';

@ArgsType()
export class FindManyOrderItemArgs {

    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: OrderItemWhereInput;

    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;

    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderItemScalarFieldEnum], {nullable:true})
    distinct?: Array<`${OrderItemScalarFieldEnum}`>;
}
