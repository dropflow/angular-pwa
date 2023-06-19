import { Component } from '@angular/core';

interface Task {
  name: string;
  description: string;
  time: number;
  status: string;
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})

export class TasksListComponent {
  tasks: Task[];

  constructor() {
    this.tasks = [
      {
        name: 'Go on bike ride',
        description: '#bike #ride #fitness',
        time: 900, // 15 minutes
        status: 'Running'
      },
      {
        name: 'Healthy breakfast',
        description: '#breakfast #healthy #fitness',
        time: 1800, // 30 minutes
        status: 'Pending'
      },
      {
        name: 'Team meeting #acme',
        description: '#meeting #acme',
        time: 3600, // 60 minutes
        status: 'Pending'
      }
    ];
  }
}
