import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeStepCreateWithoutRecipeInput } from './recipe-step-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeStepCreateOrConnectWithoutRecipeInput } from './recipe-step-create-or-connect-without-recipe.input';
import { RecipeStepUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-step-upsert-with-where-unique-without-recipe.input';
import { RecipeStepCreateManyRecipeInputEnvelope } from './recipe-step-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeStepWhereUniqueInput } from './recipe-step-where-unique.input';
import { RecipeStepUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-step-update-with-where-unique-without-recipe.input';
import { RecipeStepUpdateManyWithWhereWithoutRecipeInput } from './recipe-step-update-many-with-where-without-recipe.input';
import { RecipeStepScalarWhereInput } from './recipe-step-scalar-where.input';

@InputType()
export class RecipeStepUpdateManyWithoutRecipeNestedInput {

    @Field(() => [RecipeStepCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeStepCreateWithoutRecipeInput)
    create?: Array<RecipeStepCreateWithoutRecipeInput>;

    @Field(() => [RecipeStepCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeStepCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeStepCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeStepUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeStepUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipeStepUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => RecipeStepCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeStepCreateManyRecipeInputEnvelope)
    createMany?: RecipeStepCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeStepWhereUniqueInput], {nullable:true})
    @Type(() => RecipeStepWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeStepWhereUniqueInput], {nullable:true})
    @Type(() => RecipeStepWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeStepWhereUniqueInput], {nullable:true})
    @Type(() => RecipeStepWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeStepWhereUniqueInput], {nullable:true})
    @Type(() => RecipeStepWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>>;

    @Field(() => [RecipeStepUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeStepUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipeStepUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeStepUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeStepUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipeStepUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipeStepScalarWhereInput], {nullable:true})
    @Type(() => RecipeStepScalarWhereInput)
    deleteMany?: Array<RecipeStepScalarWhereInput>;
}
