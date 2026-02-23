import { registerEnumType } from '@nestjs/graphql';

export enum Unit {
    GRAM = "GRAM",
    MILLILITER = "MILLILITER",
    PIECE = "PIECE",
    TEASPOON = "TEASPOON",
    TABLESPOON = "TABLESPOON",
    CLOVES = "CLOVES"
}


registerEnumType(Unit, { name: 'Unit', description: undefined })
