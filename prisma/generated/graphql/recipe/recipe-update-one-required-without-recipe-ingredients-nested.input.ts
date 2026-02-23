import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutRecipeIngredientsInput } from './recipe-create-without-recipe-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutRecipeIngredientsInput } from './recipe-create-or-connect-without-recipe-ingredients.input';
import { RecipeUpsertWithoutRecipeIngredientsInput } from './recipe-upsert-without-recipe-ingredients.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutRecipeIngredientsInput } from './recipe-update-to-one-with-where-without-recipe-ingredients.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput {

    @Field(() => RecipeCreateWithoutRecipeIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutRecipeIngredientsInput)
    create?: RecipeCreateWithoutRecipeIngredientsInput;

    @Field(() => RecipeCreateOrConnectWithoutRecipeIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutRecipeIngredientsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeIngredientsInput;

    @Field(() => RecipeUpsertWithoutRecipeIngredientsInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutRecipeIngredientsInput)
    upsert?: RecipeUpsertWithoutRecipeIngredientsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutRecipeIngredientsInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutRecipeIngredientsInput)
    update?: RecipeUpdateToOneWithWhereWithoutRecipeIngredientsInput;
}
