import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AdminRecipesService } from './admin-recipes.service'
import { IngredientsModule } from './ingredients/ingredients.module'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'

@Module({
	imports: [IngredientsModule, PrismaModule],
	providers: [RecipesResolver, RecipesService, AdminRecipesService],
})
export class RecipesModule {}
