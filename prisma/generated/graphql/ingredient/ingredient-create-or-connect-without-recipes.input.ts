import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipesInput } from './ingredient-create-without-recipes.input';

@InputType()
export class IngredientCreateOrConnectWithoutRecipesInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientCreateWithoutRecipesInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipesInput)
    create!: IngredientCreateWithoutRecipesInput;
}
