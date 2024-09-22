import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'observables';

  x1() {
    return new Observable((x) => {
      x.next(1);
    });
  }

  ngOnInit() {
    const res = this.x1().subscribe();
    console.log(res);
  }
}
