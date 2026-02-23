import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedManyWithoutTagsInput } from '../recipe/recipe-create-nested-many-without-tags.input';

@InputType()
export class RecipeTagCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedManyWithoutTagsInput, {nullable:true})
    recipes?: RecipeCreateNestedManyWithoutTagsInput;
}
