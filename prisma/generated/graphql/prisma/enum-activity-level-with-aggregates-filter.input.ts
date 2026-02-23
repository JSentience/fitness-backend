import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLevel } from './activity-level.enum';
import { IntFilter } from './int-filter.input';
import { EnumActivityLevelFilter } from './enum-activity-level-filter.input';

@InputType()
export class EnumActivityLevelWithAggregatesFilter {

    @Field(() => ActivityLevel, {nullable:true})
    equals?: `${ActivityLevel}`;

    @Field(() => [ActivityLevel], {nullable:true})
    in?: Array<`${ActivityLevel}`>;

    @Field(() => [ActivityLevel], {nullable:true})
    notIn?: Array<`${ActivityLevel}`>;

    @Field(() => EnumActivityLevelWithAggregatesFilter, {nullable:true})
    not?: EnumActivityLevelWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumActivityLevelFilter, {nullable:true})
    _min?: EnumActivityLevelFilter;

    @Field(() => EnumActivityLevelFilter, {nullable:true})
    _max?: EnumActivityLevelFilter;
}
