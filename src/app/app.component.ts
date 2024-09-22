import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'observables';
  result: any;

  x1() {
    return new Observable((x) => {
      x.next(1);
    });
  }

  ngOnInit() {
    this.result = this.x1().subscribe();
    console.log(this.result);
  }

  ngOnDestroy() {
    this.result.unsubscribe();
    console.log('the observable unsubscribed..');
  }
}
