import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTagUpdateManyMutationInput } from './recipe-tag-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeTagWhereInput } from './recipe-tag-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRecipeTagArgs {

    @Field(() => RecipeTagUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeTagUpdateManyMutationInput)
    data!: RecipeTagUpdateManyMutationInput;

    @Field(() => RecipeTagWhereInput, {nullable:true})
    @Type(() => RecipeTagWhereInput)
    where?: RecipeTagWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
