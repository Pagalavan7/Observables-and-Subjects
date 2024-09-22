import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-ofandfrom',
  standalone: true,
  imports: [],
  templateUrl: './ofandfrom.component.html',
  styleUrl: './ofandfrom.component.css',
})
export class OfandfromComponent {
  arr1 = [1, 2, 3, 4, 5, 6];
  arr2 = ['a', 'bn', 'c', 'd', 'e', 'f'];

  observable() {
    return from(this.arr1);
  }

  getData() {
    const result = this.observable().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
    console.log('the reuslt is: ', result);
  }

  pr1 = new Promise((res, rej) => {
    res([21, 213, 432, 4, 64, 56, 56, 67, 453]);
  });

  ngOnInit() {
    console.log(this.pr1);
    console.log(this.pr1);
    const myObservable = from(this.pr1);
    myObservable.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
