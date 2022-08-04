import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  homeRoute() {
    return {
      status: 'success',
      message: 'welcome to task-scheduler API',
    };
  }
  find() {
    return ['this will be implemented soon'];
  }
  findOne(id: number) {
    return id;
  }

  delete(id: number) {
    return id;
  }
  update(id: number) {
    return id;
  }
}
