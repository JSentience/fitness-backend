import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeCreateManyInput } from './recipe-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeArgs {

    @Field(() => [RecipeCreateManyInput], {nullable:false})
    @Type(() => RecipeCreateManyInput)
    data!: Array<RecipeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
