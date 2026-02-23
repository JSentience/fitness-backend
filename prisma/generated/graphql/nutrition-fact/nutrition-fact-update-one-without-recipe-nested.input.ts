import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionFactCreateWithoutRecipeInput } from './nutrition-fact-create-without-recipe.input';
import { Type } from 'class-transformer';
import { NutritionFactCreateOrConnectWithoutRecipeInput } from './nutrition-fact-create-or-connect-without-recipe.input';
import { NutritionFactUpsertWithoutRecipeInput } from './nutrition-fact-upsert-without-recipe.input';
import { NutritionFactWhereInput } from './nutrition-fact-where.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { NutritionFactWhereUniqueInput } from './nutrition-fact-where-unique.input';
import { NutritionFactUpdateToOneWithWhereWithoutRecipeInput } from './nutrition-fact-update-to-one-with-where-without-recipe.input';

@InputType()
export class NutritionFactUpdateOneWithoutRecipeNestedInput {

    @Field(() => NutritionFactCreateWithoutRecipeInput, {nullable:true})
    @Type(() => NutritionFactCreateWithoutRecipeInput)
    create?: NutritionFactCreateWithoutRecipeInput;

    @Field(() => NutritionFactCreateOrConnectWithoutRecipeInput, {nullable:true})
    @Type(() => NutritionFactCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: NutritionFactCreateOrConnectWithoutRecipeInput;

    @Field(() => NutritionFactUpsertWithoutRecipeInput, {nullable:true})
    @Type(() => NutritionFactUpsertWithoutRecipeInput)
    upsert?: NutritionFactUpsertWithoutRecipeInput;

    @Field(() => NutritionFactWhereInput, {nullable:true})
    @Type(() => NutritionFactWhereInput)
    disconnect?: NutritionFactWhereInput;

    @Field(() => NutritionFactWhereInput, {nullable:true})
    @Type(() => NutritionFactWhereInput)
    delete?: NutritionFactWhereInput;

    @Field(() => NutritionFactWhereUniqueInput, {nullable:true})
    @Type(() => NutritionFactWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionFactWhereUniqueInput, 'id' | 'recipeId'>;

    @Field(() => NutritionFactUpdateToOneWithWhereWithoutRecipeInput, {nullable:true})
    @Type(() => NutritionFactUpdateToOneWithWhereWithoutRecipeInput)
    update?: NutritionFactUpdateToOneWithWhereWithoutRecipeInput;
}
