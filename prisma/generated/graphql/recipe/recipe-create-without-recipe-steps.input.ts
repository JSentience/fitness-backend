import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { UserCreateNestedOneWithoutRecipesInput } from '../user/user-create-nested-one-without-recipes.input';
import { NutritionFactCreateNestedOneWithoutRecipeInput } from '../nutrition-fact/nutrition-fact-create-nested-one-without-recipe.input';
import { RecipeTagCreateNestedManyWithoutRecipesInput } from '../recipe-tag/recipe-tag-create-nested-many-without-recipes.input';
import { RecipeIngredientCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-recipe.input';
import { LikeCreateNestedManyWithoutRecipeInput } from '../like/like-create-nested-many-without-recipe.input';
import { CommentCreateNestedManyWithoutRecipeInput } from '../comment/comment-create-nested-many-without-recipe.input';

@InputType()
export class RecipeCreateWithoutRecipeStepsInput {

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

    @Field(() => NutritionFactCreateNestedOneWithoutRecipeInput, {nullable:true})
    nutritionFact?: NutritionFactCreateNestedOneWithoutRecipeInput;

    @Field(() => RecipeTagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: RecipeTagCreateNestedManyWithoutRecipesInput;

    @Field(() => RecipeIngredientCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput;

    @Field(() => LikeCreateNestedManyWithoutRecipeInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutRecipeInput;

    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutRecipeInput;
}
