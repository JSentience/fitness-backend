import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { UserUpdateOneRequiredWithoutRecipesNestedInput } from '../user/user-update-one-required-without-recipes-nested.input';
import { NutritionFactUpdateOneWithoutRecipeNestedInput } from '../nutrition-fact/nutrition-fact-update-one-without-recipe-nested.input';
import { RecipeTagUpdateManyWithoutRecipesNestedInput } from '../recipe-tag/recipe-tag-update-many-without-recipes-nested.input';
import { RecipeStepUpdateManyWithoutRecipeNestedInput } from '../recipe-step/recipe-step-update-many-without-recipe-nested.input';
import { LikeUpdateManyWithoutRecipeNestedInput } from '../like/like-update-many-without-recipe-nested.input';
import { CommentUpdateManyWithoutRecipeNestedInput } from '../comment/comment-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUpdateWithoutRecipeIngredientsInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput;

    @Field(() => NutritionFactUpdateOneWithoutRecipeNestedInput, {nullable:true})
    nutritionFact?: NutritionFactUpdateOneWithoutRecipeNestedInput;

    @Field(() => RecipeTagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: RecipeTagUpdateManyWithoutRecipesNestedInput;

    @Field(() => RecipeStepUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeSteps?: RecipeStepUpdateManyWithoutRecipeNestedInput;

    @Field(() => LikeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutRecipeNestedInput;
}
