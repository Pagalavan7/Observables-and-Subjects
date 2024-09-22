import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-show-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-tasks.component.html',
  styleUrl: './show-tasks.component.css',
})
export class ShowTasksComponent {
  tasks = ['Task 1', 'Task 2'];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    console.log('Show task initialized..');
    this.taskService.event.subscribe({
      next: (x) => {
        this.tasks.push(x);
      },
    });
  }
}
