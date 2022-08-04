import { TasksService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private readonly TasksService: TasksService) {}

  @Get()
  async getAllTasks() {
    return this.TasksService.find();
  }

  @Post()
  async createTask(@Body() body: CreateTaskDto) {
    //
  }

  @Get('/:id')
  async getTask(@Param() id: string) {
    return this.TasksService.findOne(parseInt(id));
  }

  @Delete('/:id')
  async deleteTask(@Param() id: string) {
    return this.TasksService.delete(parseInt(id));
  }

  @Patch('/:id')
  async updateTask(@Param() id: string) {
    return this.TasksService.update(parseInt(id));
  }
}
