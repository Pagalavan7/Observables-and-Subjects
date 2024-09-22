import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // event: EventEmitter<any> = new EventEmitter<any>();

  event = new Subject<string>();

  createTask(taskCreated: string) {
    console.log('in service', taskCreated);
    this.event.next(taskCreated);
  }
}
