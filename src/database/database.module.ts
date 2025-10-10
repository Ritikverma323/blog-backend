import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from '../config/configuration';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || configuration().mongoUri),
  ],
})
export class DatabaseModule {}
