import { Module } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    CardModule,
    MongooseModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          expandVariables: true,
        }),
      ],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('database.host'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
