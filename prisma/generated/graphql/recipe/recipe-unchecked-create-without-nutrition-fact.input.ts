import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { RecipeTagUncheckedCreateNestedManyWithoutRecipesInput } from '../recipe-tag/recipe-tag-unchecked-create-nested-many-without-recipes.input';
import { RecipeStepUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-step/recipe-step-unchecked-create-nested-many-without-recipe.input';
import { RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-recipe.input';
import { LikeUncheckedCreateNestedManyWithoutRecipeInput } from '../like/like-unchecked-create-nested-many-without-recipe.input';
import { CommentUncheckedCreateNestedManyWithoutRecipeInput } from '../comment/comment-unchecked-create-nested-many-without-recipe.input';

@InputType()
export class RecipeUncheckedCreateWithoutNutritionFactInput {

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

    @Field(() => RecipeTagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: RecipeTagUncheckedCreateNestedManyWithoutRecipesInput;

    @Field(() => RecipeStepUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeSteps?: RecipeStepUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => LikeUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput;
}
