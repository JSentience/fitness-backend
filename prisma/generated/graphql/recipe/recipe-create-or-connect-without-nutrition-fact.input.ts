import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutNutritionFactInput } from './recipe-create-without-nutrition-fact.input';

@InputType()
export class RecipeCreateOrConnectWithoutNutritionFactInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeCreateWithoutNutritionFactInput, {nullable:false})
    @Type(() => RecipeCreateWithoutNutritionFactInput)
    create!: RecipeCreateWithoutNutritionFactInput;
}
