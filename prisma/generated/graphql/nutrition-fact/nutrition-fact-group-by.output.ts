import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NutritionFactCountAggregate } from './nutrition-fact-count-aggregate.output';
import { NutritionFactAvgAggregate } from './nutrition-fact-avg-aggregate.output';
import { NutritionFactSumAggregate } from './nutrition-fact-sum-aggregate.output';
import { NutritionFactMinAggregate } from './nutrition-fact-min-aggregate.output';
import { NutritionFactMaxAggregate } from './nutrition-fact-max-aggregate.output';

@ObjectType()
export class NutritionFactGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:false})
    proteins!: number;

    @Field(() => Float, {nullable:false})
    fats!: number;

    @Field(() => Float, {nullable:false})
    carbohydrates!: number;

    @Field(() => Float, {nullable:false})
    fiber!: number;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => NutritionFactCountAggregate, {nullable:true})
    _count?: NutritionFactCountAggregate;

    @Field(() => NutritionFactAvgAggregate, {nullable:true})
    _avg?: NutritionFactAvgAggregate;

    @Field(() => NutritionFactSumAggregate, {nullable:true})
    _sum?: NutritionFactSumAggregate;

    @Field(() => NutritionFactMinAggregate, {nullable:true})
    _min?: NutritionFactMinAggregate;

    @Field(() => NutritionFactMaxAggregate, {nullable:true})
    _max?: NutritionFactMaxAggregate;
}
