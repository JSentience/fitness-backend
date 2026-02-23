import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeStepCreateWithoutRecipeInput } from './recipe-step-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeStepCreateOrConnectWithoutRecipeInput } from './recipe-step-create-or-connect-without-recipe.input';
import { RecipeStepCreateManyRecipeInputEnvelope } from './recipe-step-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeStepWhereUniqueInput } from './recipe-step-where-unique.input';

@InputType()
export class RecipeStepUncheckedCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipeStepCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeStepCreateWithoutRecipeInput)
    create?: Array<RecipeStepCreateWithoutRecipeInput>;

    @Field(() => [RecipeStepCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeStepCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeStepCreateOrConnectWithoutRecipeInput>;

    @Field(() => RecipeStepCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeStepCreateManyRecipeInputEnvelope)
    createMany?: RecipeStepCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeStepWhereUniqueInput], {nullable:true})
    @Type(() => RecipeStepWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>>;
}
