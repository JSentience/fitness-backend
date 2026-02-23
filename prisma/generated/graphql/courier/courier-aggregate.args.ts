import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourierWhereInput } from './courier-where.input';
import { Type } from 'class-transformer';
import { CourierOrderByWithRelationInput } from './courier-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CourierWhereUniqueInput } from './courier-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourierCountAggregateInput } from './courier-count-aggregate.input';
import { CourierMinAggregateInput } from './courier-min-aggregate.input';
import { CourierMaxAggregateInput } from './courier-max-aggregate.input';

@ArgsType()
export class CourierAggregateArgs {

    @Field(() => CourierWhereInput, {nullable:true})
    @Type(() => CourierWhereInput)
    where?: CourierWhereInput;

    @Field(() => [CourierOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CourierOrderByWithRelationInput>;

    @Field(() => CourierWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CourierWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CourierCountAggregateInput, {nullable:true})
    _count?: CourierCountAggregateInput;

    @Field(() => CourierMinAggregateInput, {nullable:true})
    _min?: CourierMinAggregateInput;

    @Field(() => CourierMaxAggregateInput, {nullable:true})
    _max?: CourierMaxAggregateInput;
}
