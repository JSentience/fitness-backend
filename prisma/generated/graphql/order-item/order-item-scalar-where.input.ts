import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderItemScalarWhereInput {

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    AND?: Array<OrderItemScalarWhereInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    OR?: Array<OrderItemScalarWhereInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    NOT?: Array<OrderItemScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeIngredientId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    price?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
