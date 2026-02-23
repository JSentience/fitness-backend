import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionFactCreateManyInput } from './nutrition-fact-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNutritionFactArgs {

    @Field(() => [NutritionFactCreateManyInput], {nullable:false})
    @Type(() => NutritionFactCreateManyInput)
    data!: Array<NutritionFactCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
