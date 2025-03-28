import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://flexwidflash:08024575820@cluster0.c6i2qkb.mongodb.net/mrmongo'),
    UsersModule],
  controllers: [],
  providers: []
})
export class AppModule {}
