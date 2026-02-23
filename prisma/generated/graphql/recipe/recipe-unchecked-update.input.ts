import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { NutritionFactUncheckedUpdateOneWithoutRecipeNestedInput } from '../nutrition-fact/nutrition-fact-unchecked-update-one-without-recipe-nested.input';
import { RecipeTagUncheckedUpdateManyWithoutRecipesNestedInput } from '../recipe-tag/recipe-tag-unchecked-update-many-without-recipes-nested.input';
import { RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-step/recipe-step-unchecked-update-many-without-recipe-nested.input';
import { RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-recipe-nested.input';
import { LikeUncheckedUpdateManyWithoutRecipeNestedInput } from '../like/like-unchecked-update-many-without-recipe-nested.input';
import { CommentUncheckedUpdateManyWithoutRecipeNestedInput } from '../comment/comment-unchecked-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Int, {nullable:true})
    cookingTime?: number;

    @Field(() => Difficulty, {nullable:true})
    difficulty?: `${Difficulty}`;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NutritionFactUncheckedUpdateOneWithoutRecipeNestedInput, {nullable:true})
    nutritionFact?: NutritionFactUncheckedUpdateOneWithoutRecipeNestedInput;

    @Field(() => RecipeTagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: RecipeTagUncheckedUpdateManyWithoutRecipesNestedInput;

    @Field(() => RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeSteps?: RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => LikeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    likes?: LikeUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput;
}
