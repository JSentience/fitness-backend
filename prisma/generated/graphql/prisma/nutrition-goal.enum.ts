import { registerEnumType } from '@nestjs/graphql';

export enum NutritionGoal {
    WEIGHT_LOSS = "WEIGHT_LOSS",
    MAINTENANCE = "MAINTENANCE",
    MUSCLE_GAIN = "MUSCLE_GAIN"
}


registerEnumType(NutritionGoal, { name: 'NutritionGoal', description: undefined })
