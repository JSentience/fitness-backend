import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IngredientCreateManyInput } from './ingredient-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyIngredientArgs {

    @Field(() => [IngredientCreateManyInput], {nullable:false})
    @Type(() => IngredientCreateManyInput)
    data!: Array<IngredientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
