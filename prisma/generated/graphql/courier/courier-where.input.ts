import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CourierWhereInput {

    @Field(() => [CourierWhereInput], {nullable:true})
    AND?: Array<CourierWhereInput>;

    @Field(() => [CourierWhereInput], {nullable:true})
    OR?: Array<CourierWhereInput>;

    @Field(() => [CourierWhereInput], {nullable:true})
    NOT?: Array<CourierWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
