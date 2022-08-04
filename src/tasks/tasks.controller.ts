import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly TasksService: TasksService) {}

  @Get('/')
  async getAllTasks() {
    return this.TasksService.homeRoute();
  }
}
