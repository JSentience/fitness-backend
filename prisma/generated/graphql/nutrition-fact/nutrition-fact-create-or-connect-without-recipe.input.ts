import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { NutritionFactWhereUniqueInput } from './nutrition-fact-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionFactCreateWithoutRecipeInput } from './nutrition-fact-create-without-recipe.input';

@InputType()
export class NutritionFactCreateOrConnectWithoutRecipeInput {

    @Field(() => NutritionFactWhereUniqueInput, {nullable:false})
    @Type(() => NutritionFactWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionFactWhereUniqueInput, 'id' | 'recipeId'>;

    @Field(() => NutritionFactCreateWithoutRecipeInput, {nullable:false})
    @Type(() => NutritionFactCreateWithoutRecipeInput)
    create!: NutritionFactCreateWithoutRecipeInput;
}
