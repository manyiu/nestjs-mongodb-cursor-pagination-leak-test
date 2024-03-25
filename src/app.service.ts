import { Injectable } from '@nestjs/common';
import { Db } from 'mongodb';
import { aggregatePaginated } from 'mongodb-cursor-pagination';

@Injectable()
export class AppService {
  constructor(private readonly db: Db) {}

  async getHello() {
    const collection = this.db.collection('myCollection');

    console.log('Hello World!');

    const result = await aggregatePaginated(collection, {
      pipeline: [],
    });

    console.log(result);

    return 'Hello World!';
  }
}
