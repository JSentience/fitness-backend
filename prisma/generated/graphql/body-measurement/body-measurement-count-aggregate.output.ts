import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BodyMeasurementCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    heightCm!: number;

    @Field(() => Int, {nullable:false})
    weightKg!: number;

    @Field(() => Int, {nullable:false})
    goalWeightKg!: number;

    @Field(() => Int, {nullable:false})
    chestCm!: number;

    @Field(() => Int, {nullable:false})
    waistCm!: number;

    @Field(() => Int, {nullable:false})
    thighCm!: number;

    @Field(() => Int, {nullable:false})
    armCm!: number;

    @Field(() => Int, {nullable:false})
    activityLevel!: number;

    @Field(() => Int, {nullable:false})
    nutritionGoal!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
