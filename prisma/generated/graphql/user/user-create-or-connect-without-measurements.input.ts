import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMeasurementsInput } from './user-create-without-measurements.input';

@InputType()
export class UserCreateOrConnectWithoutMeasurementsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutMeasurementsInput, {nullable:false})
    @Type(() => UserCreateWithoutMeasurementsInput)
    create!: UserCreateWithoutMeasurementsInput;
}
