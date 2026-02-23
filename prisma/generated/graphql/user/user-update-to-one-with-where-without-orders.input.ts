import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOrdersInput } from './user-update-without-orders.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutOrdersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOrdersInput)
    data!: UserUpdateWithoutOrdersInput;
}
