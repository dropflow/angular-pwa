import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  isPlaying: boolean;

  constructor() {
    this.isPlaying = false;
  }

  playClick(): void {
    this.isPlaying = ! this.isPlaying;
  }
}
