import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BodyMeasurementSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    heightCm?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    weightKg?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    goalWeightKg?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    chestCm?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    waistCm?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    thighCm?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    armCm?: `${SortOrder}`;
}
