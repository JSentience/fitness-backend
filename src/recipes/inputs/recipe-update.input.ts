import { InputType, PartialType } from '@nestjs/graphql'
import { RecipeCreateInput } from './recipe.input'

@InputType()
export class RecipeUpdateInput extends PartialType(RecipeCreateInput) {}
