import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { UserUpdateOneRequiredWithoutOrdersNestedInput } from '../user/user-update-one-required-without-orders-nested.input';

@InputType()
export class OrderUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => OrderStatus, {nullable:true})
    status?: `${OrderStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutOrdersNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput;
}
