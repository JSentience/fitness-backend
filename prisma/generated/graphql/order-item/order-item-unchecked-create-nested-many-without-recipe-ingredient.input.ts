import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutRecipeIngredientInput } from './order-item-create-without-recipe-ingredient.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutRecipeIngredientInput } from './order-item-create-or-connect-without-recipe-ingredient.input';
import { OrderItemCreateManyRecipeIngredientInputEnvelope } from './order-item-create-many-recipe-ingredient-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';

@InputType()
export class OrderItemUncheckedCreateNestedManyWithoutRecipeIngredientInput {

    @Field(() => [OrderItemCreateWithoutRecipeIngredientInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutRecipeIngredientInput)
    create?: Array<OrderItemCreateWithoutRecipeIngredientInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutRecipeIngredientInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutRecipeIngredientInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutRecipeIngredientInput>;

    @Field(() => OrderItemCreateManyRecipeIngredientInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyRecipeIngredientInputEnvelope)
    createMany?: OrderItemCreateManyRecipeIngredientInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
}
