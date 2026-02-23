import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeIngredientScalarRelationFilter } from '../recipe-ingredient/recipe-ingredient-scalar-relation-filter.input';

@InputType()
export class OrderItemWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [OrderItemWhereInput], {nullable:true})
    AND?: Array<OrderItemWhereInput>;

    @Field(() => [OrderItemWhereInput], {nullable:true})
    OR?: Array<OrderItemWhereInput>;

    @Field(() => [OrderItemWhereInput], {nullable:true})
    NOT?: Array<OrderItemWhereInput>;

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

    @Field(() => RecipeIngredientScalarRelationFilter, {nullable:true})
    recipeIngredient?: RecipeIngredientScalarRelationFilter;
}
