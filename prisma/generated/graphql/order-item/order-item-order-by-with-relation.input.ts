import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RecipeIngredientOrderByWithRelationInput } from '../recipe-ingredient/recipe-ingredient-order-by-with-relation.input';

@InputType()
export class OrderItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeIngredientId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    quantity?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeIngredientOrderByWithRelationInput, {nullable:true})
    recipeIngredient?: RecipeIngredientOrderByWithRelationInput;
}
