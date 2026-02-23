import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutUserInput } from './order-create-without-user.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutUserInput } from './order-create-or-connect-without-user.input';
import { OrderUpsertWithWhereUniqueWithoutUserInput } from './order-upsert-with-where-unique-without-user.input';
import { OrderCreateManyUserInputEnvelope } from './order-create-many-user-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutUserInput } from './order-update-with-where-unique-without-user.input';
import { OrderUpdateManyWithWhereWithoutUserInput } from './order-update-many-with-where-without-user.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;

    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: OrderCreateManyUserInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderId'>>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}
