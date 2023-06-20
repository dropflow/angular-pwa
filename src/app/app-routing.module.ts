import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// views
import { HomeComponent } from './views/home/home.component';
import { PlayerComponent } from './views/player/player.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'player', component: PlayerComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
