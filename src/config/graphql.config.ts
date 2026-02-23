import { ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigService } from '@nestjs/config'
import { type IGqlContext } from 'src/app.interface'
/* TODO: Type not added when save */

export const getGraphQLConfig = (
	configService: ConfigService
): ApolloDriverConfig => ({
	autoSchemaFile: true,
	sortSchema: true,
	playground: configService.get<string>('MODE') === 'development',
	context: ({ req, res }: IGqlContext): IGqlContext => ({ req, res })
})
