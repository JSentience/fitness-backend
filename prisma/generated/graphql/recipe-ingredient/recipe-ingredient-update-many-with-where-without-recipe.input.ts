import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientScalarWhereInput } from './recipe-ingredient-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateManyMutationInput } from './recipe-ingredient-update-many-mutation.input';

@InputType()
export class RecipeIngredientUpdateManyWithWhereWithoutRecipeInput {

    @Field(() => RecipeIngredientScalarWhereInput, {nullable:false})
    @Type(() => RecipeIngredientScalarWhereInput)
    where!: RecipeIngredientScalarWhereInput;

    @Field(() => RecipeIngredientUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateManyMutationInput)
    data!: RecipeIngredientUpdateManyMutationInput;
}
