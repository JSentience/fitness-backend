import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeStepWhereUniqueInput } from './recipe-step-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeStepCreateInput } from './recipe-step-create.input';
import { RecipeStepUpdateInput } from './recipe-step-update.input';

@ArgsType()
export class UpsertOneRecipeStepArgs {

    @Field(() => RecipeStepWhereUniqueInput, {nullable:false})
    @Type(() => RecipeStepWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>;

    @Field(() => RecipeStepCreateInput, {nullable:false})
    @Type(() => RecipeStepCreateInput)
    create!: RecipeStepCreateInput;

    @Field(() => RecipeStepUpdateInput, {nullable:false})
    @Type(() => RecipeStepUpdateInput)
    update!: RecipeStepUpdateInput;
}
