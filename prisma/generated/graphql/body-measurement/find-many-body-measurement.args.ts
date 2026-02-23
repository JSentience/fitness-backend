import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';
import { Type } from 'class-transformer';
import { BodyMeasurementOrderByWithRelationInput } from './body-measurement-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BodyMeasurementScalarFieldEnum } from './body-measurement-scalar-field.enum';

@ArgsType()
export class FindManyBodyMeasurementArgs {

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    @Type(() => BodyMeasurementWhereInput)
    where?: BodyMeasurementWhereInput;

    @Field(() => [BodyMeasurementOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BodyMeasurementOrderByWithRelationInput>;

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BodyMeasurementScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BodyMeasurementScalarFieldEnum}`>;
}
