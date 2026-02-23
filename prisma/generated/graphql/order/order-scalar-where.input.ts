import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumOrderStatusFilter } from '../prisma/enum-order-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderScalarWhereInput {

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    AND?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    OR?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    NOT?: Array<OrderScalarWhereInput>;

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
}
