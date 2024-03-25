import { Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: Db,
      useFactory: (client: MongoClient) => client.db('myDatabase'),
      inject: [MongoClient],
    },
    {
      provide: MongoClient,
      useFactory: async () => {
        return new MongoClient('mongodb://mongo:27017');
      },
    },
  ],
})
export class AppModule {}
