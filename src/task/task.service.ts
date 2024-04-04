import { InjectModel } from '@nestjs/mongoose';
import{Model} from 'mongoose'
import {Body, Get, Injectable, NotFoundException} from '@nestjs/common';
import{Task} from './task.entity'

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>,){}

    /* Get */

    findAll(){
        return this.taskModel.find().exec();
    }


    async findOne(id:string){
        const task = this.taskModel.findOne({_id:id});
        if(!task){
            throw new NotFoundException(`Task ${id}not found`);
        }
        return task;
    }

    /* Post */

    async create(@Body() body): Promise<Task>{
        const taskData = {
            title: body.title,
            description: body.description,
            completed:body.completed
        }
        const newTask = new this.taskModel(taskData)
        return await newTask.save();
    }

    /* PUT */
    async updateTask(id: string, @Body() task): Promise<Task>{
        const taskData = {
            title: task.title,
            description: task.description,
            completed: task.completed
        }
        const updatedTask = await this.taskModel.findOneAndUpdate({_id:id}, taskData, {new:true});
        return updatedTask;
    }

    /* DELETE */
    async deleteTask(id: string): Promise<Task>{
        const deletedTask = await this.taskModel.findOneAndDelete({_id:id});
        if(!deletedTask){
            throw new NotFoundException(`Task ${id} not found`);
        }
        return deletedTask;
    }

}
