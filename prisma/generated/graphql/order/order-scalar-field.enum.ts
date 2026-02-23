import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
    id = "id",
    orderId = "orderId",
    status = "status",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
