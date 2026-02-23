import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActivityLevel } from '../prisma/activity-level.enum';
import { NutritionGoal } from '../prisma/nutrition-goal.enum';
import { User } from '../user/user.model';

@ObjectType()
export class BodyMeasurement {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    heightCm!: number | null;

    @Field(() => Int, {nullable:true})
    weightKg!: number | null;

    @Field(() => Int, {nullable:true})
    goalWeightKg!: number | null;

    @Field(() => Int, {nullable:true})
    chestCm!: number | null;

    @Field(() => Int, {nullable:true})
    waistCm!: number | null;

    @Field(() => Int, {nullable:true})
    thighCm!: number | null;

    @Field(() => Int, {nullable:true})
    armCm!: number | null;

    @Field(() => ActivityLevel, {nullable:true})
    activityLevel!: `${ActivityLevel}` | null;

    @Field(() => NutritionGoal, {nullable:true})
    nutritionGoal!: `${NutritionGoal}` | null;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;
}
