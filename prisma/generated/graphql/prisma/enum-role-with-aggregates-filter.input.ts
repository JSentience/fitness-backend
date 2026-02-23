import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';
import { IntFilter } from './int-filter.input';
import { EnumRoleFilter } from './enum-role-filter.input';

@InputType()
export class EnumRoleWithAggregatesFilter {

    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;

    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;

    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;

    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    not?: EnumRoleWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    _min?: EnumRoleFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    _max?: EnumRoleFilter;
}
