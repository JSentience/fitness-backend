import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActivityLevel } from '../prisma/activity-level.enum';
import { NutritionGoal } from '../prisma/nutrition-goal.enum';
import { UserUpdateOneRequiredWithoutMeasurementsNestedInput } from '../user/user-update-one-required-without-measurements-nested.input';

@InputType()
export class BodyMeasurementUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutMeasurementsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutMeasurementsNestedInput;
}
