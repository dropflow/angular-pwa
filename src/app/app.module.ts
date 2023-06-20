import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarChartComponent } from './components/calendar-chart/calendar-chart.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { PlayerBarComponent } from './components/player-bar/player-bar.component';

// views
import { HomeComponent } from './views/home/home.component';
import { PlayerComponent } from './views/player/player.component';
import { NoticeComponent } from './components/notice/notice.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    CalendarComponent,
    CalendarChartComponent,
    TasksListComponent,
    PlayerBarComponent,
    HomeComponent,
    PlayerComponent,
    NoticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
