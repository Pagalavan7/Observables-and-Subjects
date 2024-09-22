import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-create-new-taks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-new-taks.component.html',
  styleUrl: './create-new-taks.component.css',
})
export class CreateNewTaksComponent {
  taskCreated = '';

  constructor(private taskService: TaskService) {}

  onCreate() {
    console.log(this.taskCreated);
    this.taskService.createTask(this.taskCreated);
  }
}
