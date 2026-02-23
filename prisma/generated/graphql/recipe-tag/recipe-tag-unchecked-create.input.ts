import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUncheckedCreateNestedManyWithoutTagsInput } from '../recipe/recipe-unchecked-create-nested-many-without-tags.input';

@InputType()
export class RecipeTagUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    recipes?: RecipeUncheckedCreateNestedManyWithoutTagsInput;
}
