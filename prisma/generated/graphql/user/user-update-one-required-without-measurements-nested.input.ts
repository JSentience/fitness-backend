import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMeasurementsInput } from './user-create-without-measurements.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMeasurementsInput } from './user-create-or-connect-without-measurements.input';
import { UserUpsertWithoutMeasurementsInput } from './user-upsert-without-measurements.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMeasurementsInput } from './user-update-to-one-with-where-without-measurements.input';

@InputType()
export class UserUpdateOneRequiredWithoutMeasurementsNestedInput {

    @Field(() => UserCreateWithoutMeasurementsInput, {nullable:true})
    @Type(() => UserCreateWithoutMeasurementsInput)
    create?: UserCreateWithoutMeasurementsInput;

    @Field(() => UserCreateOrConnectWithoutMeasurementsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMeasurementsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMeasurementsInput;

    @Field(() => UserUpsertWithoutMeasurementsInput, {nullable:true})
    @Type(() => UserUpsertWithoutMeasurementsInput)
    upsert?: UserUpsertWithoutMeasurementsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutMeasurementsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutMeasurementsInput)
    update?: UserUpdateToOneWithWhereWithoutMeasurementsInput;
}
