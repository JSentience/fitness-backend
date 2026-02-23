import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTagCreateManyInput } from './recipe-tag-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeTagArgs {

    @Field(() => [RecipeTagCreateManyInput], {nullable:false})
    @Type(() => RecipeTagCreateManyInput)
    data!: Array<RecipeTagCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
