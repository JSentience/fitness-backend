import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutNutritionFactInput } from './recipe-create-without-nutrition-fact.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutNutritionFactInput } from './recipe-create-or-connect-without-nutrition-fact.input';
import { RecipeUpsertWithoutNutritionFactInput } from './recipe-upsert-without-nutrition-fact.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutNutritionFactInput } from './recipe-update-to-one-with-where-without-nutrition-fact.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutNutritionFactNestedInput {

    @Field(() => RecipeCreateWithoutNutritionFactInput, {nullable:true})
    @Type(() => RecipeCreateWithoutNutritionFactInput)
    create?: RecipeCreateWithoutNutritionFactInput;

    @Field(() => RecipeCreateOrConnectWithoutNutritionFactInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutNutritionFactInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutNutritionFactInput;

    @Field(() => RecipeUpsertWithoutNutritionFactInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutNutritionFactInput)
    upsert?: RecipeUpsertWithoutNutritionFactInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutNutritionFactInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutNutritionFactInput)
    update?: RecipeUpdateToOneWithWhereWithoutNutritionFactInput;
}
