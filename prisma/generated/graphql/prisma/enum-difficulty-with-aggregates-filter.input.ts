import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from './difficulty.enum';
import { IntFilter } from './int-filter.input';
import { EnumDifficultyFilter } from './enum-difficulty-filter.input';

@InputType()
export class EnumDifficultyWithAggregatesFilter {

    @Field(() => Difficulty, {nullable:true})
    equals?: `${Difficulty}`;

    @Field(() => [Difficulty], {nullable:true})
    in?: Array<`${Difficulty}`>;

    @Field(() => [Difficulty], {nullable:true})
    notIn?: Array<`${Difficulty}`>;

    @Field(() => EnumDifficultyWithAggregatesFilter, {nullable:true})
    not?: EnumDifficultyWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumDifficultyFilter, {nullable:true})
    _min?: EnumDifficultyFilter;

    @Field(() => EnumDifficultyFilter, {nullable:true})
    _max?: EnumDifficultyFilter;
}
