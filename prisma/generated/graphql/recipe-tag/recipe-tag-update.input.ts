import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateManyWithoutTagsNestedInput } from '../recipe/recipe-update-many-without-tags-nested.input';

@InputType()
export class RecipeTagUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateManyWithoutTagsNestedInput, {nullable:true})
    recipes?: RecipeUpdateManyWithoutTagsNestedInput;
}
