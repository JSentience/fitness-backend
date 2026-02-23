import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import cookieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Enable CORS
	app.enableCors({
		origin: process.env.FRONTEND_URL || 'http://localhost:3000',
		credentials: true,
	})

	// Cookie parser middleware
	app.use(cookieParser())

	// Global prefix
	app.setGlobalPrefix('api')

	const port = process.env.PORT || 4000
	await app.listen(port)

	console.log(`🚀 Application is running on: http://localhost:${port}/api`)
	console.log(`📊 GraphQL Playground: http://localhost:${port}/graphql`)
}

bootstrap().catch(err => {
	console.error('Error starting the application:', err)
})
