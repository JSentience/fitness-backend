import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NutritionFactSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    proteins?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fats?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    carbohydrates?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fiber?: `${SortOrder}`;
}
