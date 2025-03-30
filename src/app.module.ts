import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Flexwidflash:08024575820@cluster0.c6i2qkb.mongodb.net/crud'),
    UsersModule,
    AuthModule,
    ],
  controllers: [],
  providers: []
})
export class AppModule {}
