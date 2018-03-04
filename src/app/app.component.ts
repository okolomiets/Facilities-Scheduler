import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  template: `<div>
              <h1>
                {{title}}
              </h1>
            </div>
            <hr>
            <app-calendar></app-calendar>`,
})
export class AppComponent {
  title = 'JTC';
}
