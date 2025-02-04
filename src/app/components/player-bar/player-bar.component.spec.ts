import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBarComponent } from '../player/player.component';

describe('PlayerBarComponent', () => {
  let component: PlayerBarComponent;
  let fixture: ComponentFixture<PlayerBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerBarComponent]
    });
    fixture = TestBed.createComponent(PlayerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
