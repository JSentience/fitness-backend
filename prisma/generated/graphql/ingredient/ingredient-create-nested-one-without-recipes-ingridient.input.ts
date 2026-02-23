import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipesIngridientInput } from './ingredient-create-without-recipes-ingridient.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipesIngridientInput } from './ingredient-create-or-connect-without-recipes-ingridient.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientCreateNestedOneWithoutRecipesIngridientInput {

    @Field(() => IngredientCreateWithoutRecipesIngridientInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipesIngridientInput)
    create?: IngredientCreateWithoutRecipesIngridientInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipesIngridientInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipesIngridientInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesIngridientInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
