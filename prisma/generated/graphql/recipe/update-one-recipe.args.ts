import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeUpdateInput } from './recipe-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@ArgsType()
export class UpdateOneRecipeArgs {

    @Field(() => RecipeUpdateInput, {nullable:false})
    @Type(() => RecipeUpdateInput)
    data!: RecipeUpdateInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;
}
