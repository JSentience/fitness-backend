import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class ProfileUpdateWithoutUserInput {

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
}
