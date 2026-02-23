import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumActivityLevelFilter } from '../prisma/enum-activity-level-filter.input';
import { EnumNutritionGoalFilter } from '../prisma/enum-nutrition-goal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class BodyMeasurementWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    AND?: Array<BodyMeasurementWhereInput>;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    OR?: Array<BodyMeasurementWhereInput>;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    NOT?: Array<BodyMeasurementWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    heightCm?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    weightKg?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    goalWeightKg?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    chestCm?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    waistCm?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    thighCm?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    armCm?: IntFilter;

    @Field(() => EnumActivityLevelFilter, {nullable:true})
    activityLevel?: EnumActivityLevelFilter;

    @Field(() => EnumNutritionGoalFilter, {nullable:true})
    nutritionGoal?: EnumNutritionGoalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
