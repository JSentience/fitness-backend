import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemUpdateManyMutationInput } from './order-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OrderItemWhereInput } from './order-item-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyOrderItemArgs {

    @Field(() => OrderItemUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderItemUpdateManyMutationInput)
    data!: OrderItemUpdateManyMutationInput;

    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: OrderItemWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
