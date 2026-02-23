import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionFactCreateWithoutRecipeInput } from './nutrition-fact-create-without-recipe.input';
import { Type } from 'class-transformer';
import { NutritionFactCreateOrConnectWithoutRecipeInput } from './nutrition-fact-create-or-connect-without-recipe.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { NutritionFactWhereUniqueInput } from './nutrition-fact-where-unique.input';

@InputType()
export class NutritionFactUncheckedCreateNestedOneWithoutRecipeInput {

    @Field(() => NutritionFactCreateWithoutRecipeInput, {nullable:true})
    @Type(() => NutritionFactCreateWithoutRecipeInput)
    create?: NutritionFactCreateWithoutRecipeInput;

    @Field(() => NutritionFactCreateOrConnectWithoutRecipeInput, {nullable:true})
    @Type(() => NutritionFactCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: NutritionFactCreateOrConnectWithoutRecipeInput;

    @Field(() => NutritionFactWhereUniqueInput, {nullable:true})
    @Type(() => NutritionFactWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionFactWhereUniqueInput, 'id' | 'recipeId'>;
}
