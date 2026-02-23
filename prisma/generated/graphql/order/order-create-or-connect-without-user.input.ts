import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutUserInput } from './order-create-without-user.input';

@InputType()
export class OrderCreateOrConnectWithoutUserInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => OrderCreateWithoutUserInput, {nullable:false})
    @Type(() => OrderCreateWithoutUserInput)
    create!: OrderCreateWithoutUserInput;
}
