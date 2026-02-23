import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutLikesInput } from '../recipe/recipe-create-nested-one-without-likes.input';

@InputType()
export class LikeCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutLikesInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutLikesInput;
}
