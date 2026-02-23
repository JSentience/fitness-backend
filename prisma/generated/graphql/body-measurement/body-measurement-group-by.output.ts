import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActivityLevel } from '../prisma/activity-level.enum';
import { NutritionGoal } from '../prisma/nutrition-goal.enum';
import { BodyMeasurementCountAggregate } from './body-measurement-count-aggregate.output';
import { BodyMeasurementAvgAggregate } from './body-measurement-avg-aggregate.output';
import { BodyMeasurementSumAggregate } from './body-measurement-sum-aggregate.output';
import { BodyMeasurementMinAggregate } from './body-measurement-min-aggregate.output';
import { BodyMeasurementMaxAggregate } from './body-measurement-max-aggregate.output';

@ObjectType()
export class BodyMeasurementGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    heightCm?: number;

    @Field(() => Int, {nullable:true})
    weightKg?: number;

    @Field(() => Int, {nullable:true})
    goalWeightKg?: number;

    @Field(() => Int, {nullable:true})
    chestCm?: number;

    @Field(() => Int, {nullable:true})
    waistCm?: number;

    @Field(() => Int, {nullable:true})
    thighCm?: number;

    @Field(() => Int, {nullable:true})
    armCm?: number;

    @Field(() => ActivityLevel, {nullable:true})
    activityLevel?: `${ActivityLevel}`;

    @Field(() => NutritionGoal, {nullable:true})
    nutritionGoal?: `${NutritionGoal}`;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BodyMeasurementCountAggregate, {nullable:true})
    _count?: BodyMeasurementCountAggregate;

    @Field(() => BodyMeasurementAvgAggregate, {nullable:true})
    _avg?: BodyMeasurementAvgAggregate;

    @Field(() => BodyMeasurementSumAggregate, {nullable:true})
    _sum?: BodyMeasurementSumAggregate;

    @Field(() => BodyMeasurementMinAggregate, {nullable:true})
    _min?: BodyMeasurementMinAggregate;

    @Field(() => BodyMeasurementMaxAggregate, {nullable:true})
    _max?: BodyMeasurementMaxAggregate;
}
