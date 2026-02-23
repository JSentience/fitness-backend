import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutIngredientInput } from './recipe-ingredient-create-without-ingredient.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutIngredientInput } from './recipe-ingredient-create-or-connect-without-ingredient.input';
import { RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput } from './recipe-ingredient-upsert-with-where-unique-without-ingredient.input';
import { RecipeIngredientCreateManyIngredientInputEnvelope } from './recipe-ingredient-create-many-ingredient-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput } from './recipe-ingredient-update-with-where-unique-without-ingredient.input';
import { RecipeIngredientUpdateManyWithWhereWithoutIngredientInput } from './recipe-ingredient-update-many-with-where-without-ingredient.input';
import { RecipeIngredientScalarWhereInput } from './recipe-ingredient-scalar-where.input';

@InputType()
export class RecipeIngredientUpdateManyWithoutIngredientNestedInput {

    @Field(() => [RecipeIngredientCreateWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutIngredientInput)
    create?: Array<RecipeIngredientCreateWithoutIngredientInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutIngredientInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutIngredientInput>;

    @Field(() => [RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput)
    upsert?: Array<RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput>;

    @Field(() => RecipeIngredientCreateManyIngredientInputEnvelope, {nullable:true})
    @Type(() => RecipeIngredientCreateManyIngredientInputEnvelope)
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope;

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

    @Field(() => [RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput)
    update?: Array<RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput>;

    @Field(() => [RecipeIngredientUpdateManyWithWhereWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateManyWithWhereWithoutIngredientInput)
    updateMany?: Array<RecipeIngredientUpdateManyWithWhereWithoutIngredientInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereInput)
    deleteMany?: Array<RecipeIngredientScalarWhereInput>;
}
