import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Int } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutProfileNestedInput } from '../user/user-update-one-required-without-profile-nested.input';

@InputType()
export class ProfileUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    fullName?: string;

    @Field(() => Gender, {nullable:true})
    gender?: `${Gender}`;

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutProfileNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutProfileNestedInput;
}
