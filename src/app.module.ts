import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [TaskModule, MongooseModule.forRoot('mongodb+srv://manutorres9312:Wwl9ejoe1FicGqTV@db-ejemplo-01.elrgq55.mongodb.net/test/task_ejercicio')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
