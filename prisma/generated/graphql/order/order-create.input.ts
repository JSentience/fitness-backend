import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { UserCreateNestedOneWithoutOrdersInput } from '../user/user-create-nested-one-without-orders.input';

@InputType()
export class OrderCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => OrderStatus, {nullable:true})
    status?: `${OrderStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutOrdersInput, {nullable:false})
    user!: UserCreateNestedOneWithoutOrdersInput;
}
