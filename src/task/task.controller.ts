import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import{TaskService}from './task.service';

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
}
