import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipesIngridientInput } from './ingredient-create-without-recipes-ingridient.input';

@InputType()
export class IngredientCreateOrConnectWithoutRecipesIngridientInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientCreateWithoutRecipesIngridientInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipesIngridientInput)
    create!: IngredientCreateWithoutRecipesIngridientInput;
}
