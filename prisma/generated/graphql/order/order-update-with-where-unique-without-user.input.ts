import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutUserInput } from './order-update-without-user.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderUpdateWithoutUserInput, {nullable:false})
    @Type(() => OrderUpdateWithoutUserInput)
    data!: OrderUpdateWithoutUserInput;
}
