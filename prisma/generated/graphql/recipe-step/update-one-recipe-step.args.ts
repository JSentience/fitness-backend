import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeStepUpdateInput } from './recipe-step-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeStepWhereUniqueInput } from './recipe-step-where-unique.input';

@ArgsType()
export class UpdateOneRecipeStepArgs {

    @Field(() => RecipeStepUpdateInput, {nullable:false})
    @Type(() => RecipeStepUpdateInput)
    data!: RecipeStepUpdateInput;

    @Field(() => RecipeStepWhereUniqueInput, {nullable:false})
    @Type(() => RecipeStepWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>;
}
