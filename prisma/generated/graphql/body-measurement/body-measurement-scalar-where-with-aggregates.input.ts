import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumActivityLevelWithAggregatesFilter } from '../prisma/enum-activity-level-with-aggregates-filter.input';
import { EnumNutritionGoalWithAggregatesFilter } from '../prisma/enum-nutrition-goal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BodyMeasurementScalarWhereWithAggregatesInput {

    @Field(() => [BodyMeasurementScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BodyMeasurementScalarWhereWithAggregatesInput>;

    @Field(() => [BodyMeasurementScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BodyMeasurementScalarWhereWithAggregatesInput>;

    @Field(() => [BodyMeasurementScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BodyMeasurementScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    heightCm?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    weightKg?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    goalWeightKg?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    chestCm?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    waistCm?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    thighCm?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    armCm?: IntWithAggregatesFilter;

    @Field(() => EnumActivityLevelWithAggregatesFilter, {nullable:true})
    activityLevel?: EnumActivityLevelWithAggregatesFilter;

    @Field(() => EnumNutritionGoalWithAggregatesFilter, {nullable:true})
    nutritionGoal?: EnumNutritionGoalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
