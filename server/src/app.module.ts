import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';


@Module({
  // imports: [TypeOrmModule.forRoot({
  //   type:'mysql',
  //   host:'localhost',
  //   port:3308,
  //   username:'root',
  //   password:'',
  //   database:'test',
  //   entities:[UserEntity],
  //   synchronize:true,
  // }),UserModel],
  imports:[MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
