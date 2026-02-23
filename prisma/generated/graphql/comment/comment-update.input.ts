import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateOneRequiredWithoutCommentsNestedInput } from '../recipe/recipe-update-one-required-without-comments-nested.input';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput;
}
