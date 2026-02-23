import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BodyMeasurementCountOrderByAggregateInput } from './body-measurement-count-order-by-aggregate.input';
import { BodyMeasurementAvgOrderByAggregateInput } from './body-measurement-avg-order-by-aggregate.input';
import { BodyMeasurementMaxOrderByAggregateInput } from './body-measurement-max-order-by-aggregate.input';
import { BodyMeasurementMinOrderByAggregateInput } from './body-measurement-min-order-by-aggregate.input';
import { BodyMeasurementSumOrderByAggregateInput } from './body-measurement-sum-order-by-aggregate.input';

@InputType()
export class BodyMeasurementOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    heightCm?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    weightKg?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    goalWeightKg?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    chestCm?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    waistCm?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    thighCm?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    armCm?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    activityLevel?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    nutritionGoal?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => BodyMeasurementCountOrderByAggregateInput, {nullable:true})
    _count?: BodyMeasurementCountOrderByAggregateInput;

    @Field(() => BodyMeasurementAvgOrderByAggregateInput, {nullable:true})
    _avg?: BodyMeasurementAvgOrderByAggregateInput;

    @Field(() => BodyMeasurementMaxOrderByAggregateInput, {nullable:true})
    _max?: BodyMeasurementMaxOrderByAggregateInput;

    @Field(() => BodyMeasurementMinOrderByAggregateInput, {nullable:true})
    _min?: BodyMeasurementMinOrderByAggregateInput;

    @Field(() => BodyMeasurementSumOrderByAggregateInput, {nullable:true})
    _sum?: BodyMeasurementSumOrderByAggregateInput;
}
