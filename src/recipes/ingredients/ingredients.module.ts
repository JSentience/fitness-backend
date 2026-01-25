import { Module } from '@nestjs/common'
import { IngredientsResolver } from './ingredients.resolver'
import { IngredientsService } from './ingredients.service'

@Module({
	providers: [IngredientsResolver, IngredientsService],
})
export class IngredientsModule {}
