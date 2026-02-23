import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeStepWhereInput } from './recipe-step-where.input';
import { Type } from 'class-transformer';
import { RecipeStepOrderByWithRelationInput } from './recipe-step-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeStepWhereUniqueInput } from './recipe-step-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeStepScalarFieldEnum } from './recipe-step-scalar-field.enum';

@ArgsType()
export class FindManyRecipeStepArgs {

    @Field(() => RecipeStepWhereInput, {nullable:true})
    @Type(() => RecipeStepWhereInput)
    where?: RecipeStepWhereInput;

    @Field(() => [RecipeStepOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeStepOrderByWithRelationInput>;

    @Field(() => RecipeStepWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeStepScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RecipeStepScalarFieldEnum}`>;
}
