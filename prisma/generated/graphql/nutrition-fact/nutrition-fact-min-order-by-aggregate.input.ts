import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NutritionFactMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    proteins?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fats?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    carbohydrates?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fiber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
