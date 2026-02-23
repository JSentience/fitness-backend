import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutUserInput } from './order-create-without-user.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutUserInput } from './order-create-or-connect-without-user.input';
import { OrderCreateManyUserInputEnvelope } from './order-create-many-user-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedManyWithoutUserInput {

    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;

    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;

    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: OrderCreateManyUserInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;
}
