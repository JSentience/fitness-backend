import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateManyMutationInput } from './recipe-update-many-mutation.input';

@InputType()
export class RecipeUpdateManyWithWhereWithoutTagsInput {

    @Field(() => RecipeScalarWhereInput, {nullable:false})
    @Type(() => RecipeScalarWhereInput)
    where!: RecipeScalarWhereInput;

    @Field(() => RecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeUpdateManyMutationInput)
    data!: RecipeUpdateManyMutationInput;
}
