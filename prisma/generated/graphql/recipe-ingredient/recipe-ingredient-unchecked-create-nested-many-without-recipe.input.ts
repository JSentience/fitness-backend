import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutRecipeInput } from './recipe-ingredient-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutRecipeInput } from './recipe-ingredient-create-or-connect-without-recipe.input';
import { RecipeIngredientCreateManyRecipeInputEnvelope } from './recipe-ingredient-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@InputType()
export class RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipeIngredientCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutRecipeInput)
    create?: Array<RecipeIngredientCreateWithoutRecipeInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutRecipeInput>;

    @Field(() => RecipeIngredientCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeIngredientCreateManyRecipeInputEnvelope)
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>>;
}
