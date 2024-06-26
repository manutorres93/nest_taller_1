import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MongooseModule} from '@nestjs/mongoose';
import{TaskSchema,Task} from './task.entity'

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Task.name,
      schema: TaskSchema
    }
  ])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
