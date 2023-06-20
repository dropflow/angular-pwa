import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
  animations: [
    trigger('notice', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.75)'
        }),
        animate('0.2s ease-out')
      ]),
      transition(':leave', [
        animate('0.2s ease-out', style({
          opacity: 0,
          transform: 'scale(0.75)',
        }))
      ]),
    ])
  ],
})
export class NoticeComponent {
  notice: string;

  constructor() {
    this.notice = "Don't watch the clock; do what it does. Keep going. Make some waves.";
  }
}
