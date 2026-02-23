import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemCreateWithoutRecipeIngredientInput } from './order-item-create-without-recipe-ingredient.input';

@InputType()
export class OrderItemCreateOrConnectWithoutRecipeIngredientInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;

    @Field(() => OrderItemCreateWithoutRecipeIngredientInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutRecipeIngredientInput)
    create!: OrderItemCreateWithoutRecipeIngredientInput;
}
