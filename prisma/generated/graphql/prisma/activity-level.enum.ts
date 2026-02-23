import { registerEnumType } from '@nestjs/graphql';

export enum ActivityLevel {
    SEDENTARY = "SEDENTARY",
    LIGHT = "LIGHT",
    MODERATE = "MODERATE",
    ACTIVE = "ACTIVE",
    VERY_ACTIVE = "VERY_ACTIVE"
}


registerEnumType(ActivityLevel, { name: 'ActivityLevel', description: undefined })
