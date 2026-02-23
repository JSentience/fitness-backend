import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CourierScalarWhereWithAggregatesInput {

    @Field(() => [CourierScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CourierScalarWhereWithAggregatesInput>;

    @Field(() => [CourierScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CourierScalarWhereWithAggregatesInput>;

    @Field(() => [CourierScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CourierScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
