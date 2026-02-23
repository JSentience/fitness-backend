import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateManyRecipeIngredientInput } from './order-item-create-many-recipe-ingredient.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderItemCreateManyRecipeIngredientInputEnvelope {

    @Field(() => [OrderItemCreateManyRecipeIngredientInput], {nullable:false})
    @Type(() => OrderItemCreateManyRecipeIngredientInput)
    data!: Array<OrderItemCreateManyRecipeIngredientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
