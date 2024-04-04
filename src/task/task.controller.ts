import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService:TaskService){}

    @Get('all')
    findAll(){
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param ('id') id:string){
        return this.taskService.findOne(id);
    }

    @Post('post')
    create(@Body() body){
        return this.taskService.create(body);
    }

    @Patch(':id')
    updateTask(@Param('id')id: string, @Body() body){
        return this.taskService.updateTask(id, body);
    }

    @Delete(':id')
    deleteTask(@Param('id')id: string){
        return this.taskService.deleteTask(id);
    }
}


