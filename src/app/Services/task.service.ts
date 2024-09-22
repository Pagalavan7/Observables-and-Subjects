import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  event: EventEmitter<any> = new EventEmitter<any>();

  createTask(taskCreated: string) {
    console.log('in service', taskCreated);
    this.event.emit(taskCreated);
  }
}
