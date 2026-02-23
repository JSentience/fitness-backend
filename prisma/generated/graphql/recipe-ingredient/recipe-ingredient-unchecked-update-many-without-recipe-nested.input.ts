import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutRecipeInput } from './recipe-ingredient-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutRecipeInput } from './recipe-ingredient-create-or-connect-without-recipe.input';
import { RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-ingredient-upsert-with-where-unique-without-recipe.input';
import { RecipeIngredientCreateManyRecipeInputEnvelope } from './recipe-ingredient-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-ingredient-update-with-where-unique-without-recipe.input';
import { RecipeIngredientUpdateManyWithWhereWithoutRecipeInput } from './recipe-ingredient-update-many-with-where-without-recipe.input';
import { RecipeIngredientScalarWhereInput } from './recipe-ingredient-scalar-where.input';

@InputType()
export class RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput {

    @Field(() => [RecipeIngredientCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutRecipeInput)
    create?: Array<RecipeIngredientCreateWithoutRecipeInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => RecipeIngredientCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeIngredientCreateManyRecipeInputEnvelope)
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>>;

    @Field(() => [RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeIngredientUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipeIngredientUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereInput)
    deleteMany?: Array<RecipeIngredientScalarWhereInput>;
}
