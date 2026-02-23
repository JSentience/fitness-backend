import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from './difficulty.enum';

@InputType()
export class EnumDifficultyFilter {

    @Field(() => Difficulty, {nullable:true})
    equals?: `${Difficulty}`;

    @Field(() => [Difficulty], {nullable:true})
    in?: Array<`${Difficulty}`>;

    @Field(() => [Difficulty], {nullable:true})
    notIn?: Array<`${Difficulty}`>;

    @Field(() => EnumDifficultyFilter, {nullable:true})
    not?: EnumDifficultyFilter;
}
