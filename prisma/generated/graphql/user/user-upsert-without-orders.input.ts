import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOrdersInput } from './user-update-without-orders.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOrdersInput } from './user-create-without-orders.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutOrdersInput {

    @Field(() => UserUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOrdersInput)
    update!: UserUpdateWithoutOrdersInput;

    @Field(() => UserCreateWithoutOrdersInput, {nullable:false})
    @Type(() => UserCreateWithoutOrdersInput)
    create!: UserCreateWithoutOrdersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
