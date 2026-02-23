import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { NutritionFactUncheckedCreateNestedOneWithoutRecipeInput } from '../nutrition-fact/nutrition-fact-unchecked-create-nested-one-without-recipe.input';
import { RecipeTagUncheckedCreateNestedManyWithoutRecipesInput } from '../recipe-tag/recipe-tag-unchecked-create-nested-many-without-recipes.input';
import { RecipeStepUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-step/recipe-step-unchecked-create-nested-many-without-recipe.input';
import { RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-recipe.input';
import { CommentUncheckedCreateNestedManyWithoutRecipeInput } from '../comment/comment-unchecked-create-nested-many-without-recipe.input';

@InputType()
export class RecipeUncheckedCreateWithoutLikesInput {

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

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NutritionFactUncheckedCreateNestedOneWithoutRecipeInput, {nullable:true})
    nutritionFact?: NutritionFactUncheckedCreateNestedOneWithoutRecipeInput;

    @Field(() => RecipeTagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: RecipeTagUncheckedCreateNestedManyWithoutRecipesInput;

    @Field(() => RecipeStepUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeSteps?: RecipeStepUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput;
}
