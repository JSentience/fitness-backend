import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipesInput } from './ingredient-create-without-recipes.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipesInput } from './ingredient-create-or-connect-without-recipes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientCreateNestedOneWithoutRecipesInput {

    @Field(() => IngredientCreateWithoutRecipesInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipesInput)
    create?: IngredientCreateWithoutRecipesInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipesInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
