import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientOrderByWithRelationInput } from './recipe-ingredient-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientCountAggregateInput } from './recipe-ingredient-count-aggregate.input';
import { RecipeIngredientAvgAggregateInput } from './recipe-ingredient-avg-aggregate.input';
import { RecipeIngredientSumAggregateInput } from './recipe-ingredient-sum-aggregate.input';
import { RecipeIngredientMinAggregateInput } from './recipe-ingredient-min-aggregate.input';
import { RecipeIngredientMaxAggregateInput } from './recipe-ingredient-max-aggregate.input';

@ArgsType()
export class RecipeIngredientAggregateArgs {

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    where?: RecipeIngredientWhereInput;

    @Field(() => [RecipeIngredientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeIngredientOrderByWithRelationInput>;

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeIngredientCountAggregateInput, {nullable:true})
    _count?: RecipeIngredientCountAggregateInput;

    @Field(() => RecipeIngredientAvgAggregateInput, {nullable:true})
    _avg?: RecipeIngredientAvgAggregateInput;

    @Field(() => RecipeIngredientSumAggregateInput, {nullable:true})
    _sum?: RecipeIngredientSumAggregateInput;

    @Field(() => RecipeIngredientMinAggregateInput, {nullable:true})
    _min?: RecipeIngredientMinAggregateInput;

    @Field(() => RecipeIngredientMaxAggregateInput, {nullable:true})
    _max?: RecipeIngredientMaxAggregateInput;
}
