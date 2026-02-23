import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    fullName = "fullName",
    gender = "gender",
    age = "age",
    bio = "bio",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
