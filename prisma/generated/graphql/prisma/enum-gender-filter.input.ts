import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from './gender.enum';

@InputType()
export class EnumGenderFilter {

    @Field(() => Gender, {nullable:true})
    equals?: `${Gender}`;

    @Field(() => [Gender], {nullable:true})
    in?: Array<`${Gender}`>;

    @Field(() => [Gender], {nullable:true})
    notIn?: Array<`${Gender}`>;

    @Field(() => EnumGenderFilter, {nullable:true})
    not?: EnumGenderFilter;
}
