import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent {
  user = ajax('https://randomuser.me/api/');
  subject = new Subject<any>();
  ngOnInit() {
    this.user.subscribe(this.subject);

    this.subject.subscribe((x) => console.log(x));
    this.subject.subscribe((x) => console.log(x));
    this.subject.subscribe((x) => console.log(x));
  }
}
