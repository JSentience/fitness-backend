import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}


registerEnumType(OrderStatus, { name: 'OrderStatus', description: undefined })
