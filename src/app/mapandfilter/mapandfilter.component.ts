import { Component } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-mapandfilter',
  standalone: true,
  imports: [],
  templateUrl: './mapandfilter.component.html',
  styleUrl: './mapandfilter.component.css',
})
export class MapandfilterComponent {
  arr = 1;
  arr3 = 3;

  observable1 = of(this.arr, this.arr3).pipe(
    map((x) => x * 3),
    filter((x) => x % 3 == 0)
  );

  onClick() {
    this.observable1.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
