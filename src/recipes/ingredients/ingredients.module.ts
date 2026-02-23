import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { IngredientsResolver } from './ingredients.resolver'
import { IngredientsService } from './ingredients.service'

@Module({
	imports: [PrismaModule],
	providers: [IngredientsResolver, IngredientsService],
})
export class IngredientsModule {}
