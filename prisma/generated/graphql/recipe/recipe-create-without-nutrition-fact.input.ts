import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { UserCreateNestedOneWithoutRecipesInput } from '../user/user-create-nested-one-without-recipes.input';
import { RecipeTagCreateNestedManyWithoutRecipesInput } from '../recipe-tag/recipe-tag-create-nested-many-without-recipes.input';
import { RecipeStepCreateNestedManyWithoutRecipeInput } from '../recipe-step/recipe-step-create-nested-many-without-recipe.input';
import { RecipeIngredientCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-recipe.input';
import { LikeCreateNestedManyWithoutRecipeInput } from '../like/like-create-nested-many-without-recipe.input';
import { CommentCreateNestedManyWithoutRecipeInput } from '../comment/comment-create-nested-many-without-recipe.input';

@InputType()
export class RecipeCreateWithoutNutritionFactInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    calories!: number;

    @Field(() => Int, {nullable:false})
    cookingTime!: number;

    @Field(() => Difficulty, {nullable:false})
    difficulty!: `${Difficulty}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRecipesInput, {nullable:false})
    author!: UserCreateNestedOneWithoutRecipesInput;

    @Field(() => RecipeTagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: RecipeTagCreateNestedManyWithoutRecipesInput;

    @Field(() => RecipeStepCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeSteps?: RecipeStepCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeIngredientCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput;

    @Field(() => LikeCreateNestedManyWithoutRecipeInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutRecipeInput;

    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutRecipeInput;
}
