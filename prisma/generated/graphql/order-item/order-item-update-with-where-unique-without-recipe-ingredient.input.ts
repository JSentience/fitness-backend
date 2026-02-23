import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemUpdateWithoutRecipeIngredientInput } from './order-item-update-without-recipe-ingredient.input';

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;

    @Field(() => OrderItemUpdateWithoutRecipeIngredientInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutRecipeIngredientInput)
    data!: OrderItemUpdateWithoutRecipeIngredientInput;
}
