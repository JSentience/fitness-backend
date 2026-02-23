import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourierWhereInput } from './courier-where.input';
import { Type } from 'class-transformer';
import { CourierOrderByWithRelationInput } from './courier-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CourierWhereUniqueInput } from './courier-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourierScalarFieldEnum } from './courier-scalar-field.enum';

@ArgsType()
export class FindManyCourierArgs {

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

    @Field(() => [CourierScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CourierScalarFieldEnum}`>;
}
