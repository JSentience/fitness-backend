import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMeasurementsInput } from './user-update-without-measurements.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMeasurementsInput } from './user-create-without-measurements.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMeasurementsInput {

    @Field(() => UserUpdateWithoutMeasurementsInput, {nullable:false})
    @Type(() => UserUpdateWithoutMeasurementsInput)
    update!: UserUpdateWithoutMeasurementsInput;

    @Field(() => UserCreateWithoutMeasurementsInput, {nullable:false})
    @Type(() => UserCreateWithoutMeasurementsInput)
    create!: UserCreateWithoutMeasurementsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
