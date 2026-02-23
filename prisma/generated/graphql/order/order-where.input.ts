import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumOrderStatusFilter } from '../prisma/enum-order-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class OrderWhereInput {

    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: EnumOrderStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
