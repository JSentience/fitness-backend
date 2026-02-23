import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTagScalarWhereInput } from './recipe-tag-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeTagUpdateManyMutationInput } from './recipe-tag-update-many-mutation.input';

@InputType()
export class RecipeTagUpdateManyWithWhereWithoutRecipesInput {

    @Field(() => RecipeTagScalarWhereInput, {nullable:false})
    @Type(() => RecipeTagScalarWhereInput)
    where!: RecipeTagScalarWhereInput;

    @Field(() => RecipeTagUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeTagUpdateManyMutationInput)
    data!: RecipeTagUpdateManyMutationInput;
}
