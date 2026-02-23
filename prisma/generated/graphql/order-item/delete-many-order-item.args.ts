import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyOrderItemArgs {

    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: OrderItemWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
