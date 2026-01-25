import { Module } from '@nestjs/common'
import { IngredientsModule } from './ingredients/ingredients.module'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'

@Module({
	providers: [RecipesResolver, RecipesService],
	imports: [IngredientsModule],
})
export class RecipesModule {}
