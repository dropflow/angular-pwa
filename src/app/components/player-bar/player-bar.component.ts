import { Component } from '@angular/core';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent {

  isPlaying: boolean;

  constructor() {
    this.isPlaying = false;
  }

  playClick(): void {
    this.isPlaying = ! this.isPlaying;
  }
}
