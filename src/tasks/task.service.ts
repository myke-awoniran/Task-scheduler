import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  homeRoute() {
    return {
      status: 'success',
      message: 'welcome to task-scheduler API',
    };
  }
  getAllTasks() {
    return ['this will be implemented soon'];
  }
}
