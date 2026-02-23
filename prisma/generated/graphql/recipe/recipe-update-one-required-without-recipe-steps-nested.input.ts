import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutRecipeStepsInput } from './recipe-create-without-recipe-steps.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutRecipeStepsInput } from './recipe-create-or-connect-without-recipe-steps.input';
import { RecipeUpsertWithoutRecipeStepsInput } from './recipe-upsert-without-recipe-steps.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutRecipeStepsInput } from './recipe-update-to-one-with-where-without-recipe-steps.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutRecipeStepsNestedInput {

    @Field(() => RecipeCreateWithoutRecipeStepsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutRecipeStepsInput)
    create?: RecipeCreateWithoutRecipeStepsInput;

    @Field(() => RecipeCreateOrConnectWithoutRecipeStepsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutRecipeStepsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeStepsInput;

    @Field(() => RecipeUpsertWithoutRecipeStepsInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutRecipeStepsInput)
    upsert?: RecipeUpsertWithoutRecipeStepsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutRecipeStepsInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutRecipeStepsInput)
    update?: RecipeUpdateToOneWithWhereWithoutRecipeStepsInput;
}
