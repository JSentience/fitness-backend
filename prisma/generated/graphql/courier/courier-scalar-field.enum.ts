import { registerEnumType } from '@nestjs/graphql';

export enum CourierScalarFieldEnum {
    id = "id",
    name = "name",
    phoneNumber = "phoneNumber",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CourierScalarFieldEnum, { name: 'CourierScalarFieldEnum', description: undefined })
