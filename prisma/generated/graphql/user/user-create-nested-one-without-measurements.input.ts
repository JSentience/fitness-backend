import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMeasurementsInput } from './user-create-without-measurements.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMeasurementsInput } from './user-create-or-connect-without-measurements.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMeasurementsInput {

    @Field(() => UserCreateWithoutMeasurementsInput, {nullable:true})
    @Type(() => UserCreateWithoutMeasurementsInput)
    create?: UserCreateWithoutMeasurementsInput;

    @Field(() => UserCreateOrConnectWithoutMeasurementsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMeasurementsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMeasurementsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
