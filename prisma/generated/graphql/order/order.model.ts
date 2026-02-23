import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Order {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => OrderStatus, {defaultValue:'PENDING',nullable:false})
    status!: `${OrderStatus}`;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;
}
