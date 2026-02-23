import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTagCreateWithoutRecipesInput } from './recipe-tag-create-without-recipes.input';
import { Type } from 'class-transformer';
import { RecipeTagCreateOrConnectWithoutRecipesInput } from './recipe-tag-create-or-connect-without-recipes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTagWhereUniqueInput } from './recipe-tag-where-unique.input';

@InputType()
export class RecipeTagCreateNestedManyWithoutRecipesInput {

    @Field(() => [RecipeTagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTagCreateWithoutRecipesInput)
    create?: Array<RecipeTagCreateWithoutRecipesInput>;

    @Field(() => [RecipeTagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<RecipeTagCreateOrConnectWithoutRecipesInput>;

    @Field(() => [RecipeTagWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>>;
}
