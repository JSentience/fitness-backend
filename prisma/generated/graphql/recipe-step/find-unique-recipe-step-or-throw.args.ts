import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeStepWhereUniqueInput } from './recipe-step-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipeStepOrThrowArgs {

    @Field(() => RecipeStepWhereUniqueInput, {nullable:false})
    @Type(() => RecipeStepWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>;
}
