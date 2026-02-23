import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class BodyMeasurementOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;
}
