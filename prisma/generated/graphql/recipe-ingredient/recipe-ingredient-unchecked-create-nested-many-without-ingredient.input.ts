import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutIngredientInput } from './recipe-ingredient-create-without-ingredient.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutIngredientInput } from './recipe-ingredient-create-or-connect-without-ingredient.input';
import { RecipeIngredientCreateManyIngredientInputEnvelope } from './recipe-ingredient-create-many-ingredient-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@InputType()
export class RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput {

    @Field(() => [RecipeIngredientCreateWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutIngredientInput)
    create?: Array<RecipeIngredientCreateWithoutIngredientInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutIngredientInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutIngredientInput>;

    @Field(() => RecipeIngredientCreateManyIngredientInputEnvelope, {nullable:true})
    @Type(() => RecipeIngredientCreateManyIngredientInputEnvelope)
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>>;
}
