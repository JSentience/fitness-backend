import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMeasurementsInput } from './user-update-without-measurements.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutMeasurementsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutMeasurementsInput, {nullable:false})
    @Type(() => UserUpdateWithoutMeasurementsInput)
    data!: UserUpdateWithoutMeasurementsInput;
}
