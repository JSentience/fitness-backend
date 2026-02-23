import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipesIngridientInput } from './ingredient-create-without-recipes-ingridient.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipesIngridientInput } from './ingredient-create-or-connect-without-recipes-ingridient.input';
import { IngredientUpsertWithoutRecipesIngridientInput } from './ingredient-upsert-without-recipes-ingridient.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateToOneWithWhereWithoutRecipesIngridientInput } from './ingredient-update-to-one-with-where-without-recipes-ingridient.input';

@InputType()
export class IngredientUpdateOneRequiredWithoutRecipesIngridientNestedInput {

    @Field(() => IngredientCreateWithoutRecipesIngridientInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipesIngridientInput)
    create?: IngredientCreateWithoutRecipesIngridientInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipesIngridientInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipesIngridientInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesIngridientInput;

    @Field(() => IngredientUpsertWithoutRecipesIngridientInput, {nullable:true})
    @Type(() => IngredientUpsertWithoutRecipesIngridientInput)
    upsert?: IngredientUpsertWithoutRecipesIngridientInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientUpdateToOneWithWhereWithoutRecipesIngridientInput, {nullable:true})
    @Type(() => IngredientUpdateToOneWithWhereWithoutRecipesIngridientInput)
    update?: IngredientUpdateToOneWithWhereWithoutRecipesIngridientInput;
}
