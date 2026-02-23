import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUncheckedUpdateManyWithoutTagsNestedInput } from '../recipe/recipe-unchecked-update-many-without-tags-nested.input';

@InputType()
export class RecipeTagUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUncheckedUpdateManyWithoutTagsNestedInput, {nullable:true})
    recipes?: RecipeUncheckedUpdateManyWithoutTagsNestedInput;
}
