import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutRecipeIngredientInput } from './order-item-create-without-recipe-ingredient.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutRecipeIngredientInput } from './order-item-create-or-connect-without-recipe-ingredient.input';
import { OrderItemUpsertWithWhereUniqueWithoutRecipeIngredientInput } from './order-item-upsert-with-where-unique-without-recipe-ingredient.input';
import { OrderItemCreateManyRecipeIngredientInputEnvelope } from './order-item-create-many-recipe-ingredient-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientInput } from './order-item-update-with-where-unique-without-recipe-ingredient.input';
import { OrderItemUpdateManyWithWhereWithoutRecipeIngredientInput } from './order-item-update-many-with-where-without-recipe-ingredient.input';
import { OrderItemScalarWhereInput } from './order-item-scalar-where.input';

@InputType()
export class OrderItemUpdateManyWithoutRecipeIngredientNestedInput {

    @Field(() => [OrderItemCreateWithoutRecipeIngredientInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutRecipeIngredientInput)
    create?: Array<OrderItemCreateWithoutRecipeIngredientInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutRecipeIngredientInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutRecipeIngredientInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutRecipeIngredientInput>;

    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutRecipeIngredientInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutRecipeIngredientInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutRecipeIngredientInput>;

    @Field(() => OrderItemCreateManyRecipeIngredientInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyRecipeIngredientInputEnvelope)
    createMany?: OrderItemCreateManyRecipeIngredientInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutRecipeIngredientInput>;

    @Field(() => [OrderItemUpdateManyWithWhereWithoutRecipeIngredientInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutRecipeIngredientInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutRecipeIngredientInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}
