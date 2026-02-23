import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Unit } from './unit.enum';
import { IntFilter } from './int-filter.input';
import { EnumUnitFilter } from './enum-unit-filter.input';

@InputType()
export class EnumUnitWithAggregatesFilter {

    @Field(() => Unit, {nullable:true})
    equals?: `${Unit}`;

    @Field(() => [Unit], {nullable:true})
    in?: Array<`${Unit}`>;

    @Field(() => [Unit], {nullable:true})
    notIn?: Array<`${Unit}`>;

    @Field(() => EnumUnitWithAggregatesFilter, {nullable:true})
    not?: EnumUnitWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumUnitFilter, {nullable:true})
    _min?: EnumUnitFilter;

    @Field(() => EnumUnitFilter, {nullable:true})
    _max?: EnumUnitFilter;
}
