import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeOrderByWithRelationInput } from './recipe-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeCountAggregateInput } from './recipe-count-aggregate.input';
import { RecipeAvgAggregateInput } from './recipe-avg-aggregate.input';
import { RecipeSumAggregateInput } from './recipe-sum-aggregate.input';
import { RecipeMinAggregateInput } from './recipe-min-aggregate.input';
import { RecipeMaxAggregateInput } from './recipe-max-aggregate.input';

@ArgsType()
export class RecipeAggregateArgs {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => [RecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeOrderByWithRelationInput>;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeCountAggregateInput, {nullable:true})
    _count?: RecipeCountAggregateInput;

    @Field(() => RecipeAvgAggregateInput, {nullable:true})
    _avg?: RecipeAvgAggregateInput;

    @Field(() => RecipeSumAggregateInput, {nullable:true})
    _sum?: RecipeSumAggregateInput;

    @Field(() => RecipeMinAggregateInput, {nullable:true})
    _min?: RecipeMinAggregateInput;

    @Field(() => RecipeMaxAggregateInput, {nullable:true})
    _max?: RecipeMaxAggregateInput;
}
