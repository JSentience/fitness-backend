import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumGenderFilter } from '../prisma/enum-gender-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class ProfileWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    fullName?: StringFilter;

    @Field(() => EnumGenderFilter, {nullable:true})
    gender?: EnumGenderFilter;

    @Field(() => IntFilter, {nullable:true})
    age?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    bio?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
