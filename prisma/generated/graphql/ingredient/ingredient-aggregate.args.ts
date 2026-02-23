import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientOrderByWithRelationInput } from './ingredient-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { IngredientCountAggregateInput } from './ingredient-count-aggregate.input';
import { IngredientMinAggregateInput } from './ingredient-min-aggregate.input';
import { IngredientMaxAggregateInput } from './ingredient-max-aggregate.input';

@ArgsType()
export class IngredientAggregateArgs {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => [IngredientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<IngredientOrderByWithRelationInput>;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => IngredientCountAggregateInput, {nullable:true})
    _count?: IngredientCountAggregateInput;

    @Field(() => IngredientMinAggregateInput, {nullable:true})
    _min?: IngredientMinAggregateInput;

    @Field(() => IngredientMaxAggregateInput, {nullable:true})
    _max?: IngredientMaxAggregateInput;
}
