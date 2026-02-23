import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionGoal } from './nutrition-goal.enum';
import { IntFilter } from './int-filter.input';
import { EnumNutritionGoalFilter } from './enum-nutrition-goal-filter.input';

@InputType()
export class EnumNutritionGoalWithAggregatesFilter {

    @Field(() => NutritionGoal, {nullable:true})
    equals?: `${NutritionGoal}`;

    @Field(() => [NutritionGoal], {nullable:true})
    in?: Array<`${NutritionGoal}`>;

    @Field(() => [NutritionGoal], {nullable:true})
    notIn?: Array<`${NutritionGoal}`>;

    @Field(() => EnumNutritionGoalWithAggregatesFilter, {nullable:true})
    not?: EnumNutritionGoalWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumNutritionGoalFilter, {nullable:true})
    _min?: EnumNutritionGoalFilter;

    @Field(() => EnumNutritionGoalFilter, {nullable:true})
    _max?: EnumNutritionGoalFilter;
}
