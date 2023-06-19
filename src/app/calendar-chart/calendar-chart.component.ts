import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-calendar-chart',
  templateUrl: './calendar-chart.component.html',
  styleUrls: ['./calendar-chart.component.scss']
})
export class CalendarChartComponent {
  public chart: any;
  public delayed: boolean = true;

  constructor() { }

  ngOnInit(): void {
    Chart.defaults.font.family = '"Inter", sans-serif';
    Chart.defaults.font.weight = '500';
    Chart.defaults.color = 'rgb(148, 163, 184)';
    Chart.defaults.scale.grid.color = 'rgb(241, 245, 249)';
    Chart.defaults.plugins.tooltip.titleColor = 'rgb(30, 41, 59)';
    Chart.defaults.plugins.tooltip.bodyColor = 'rgb(30, 41, 59)';
    Chart.defaults.plugins.tooltip.backgroundColor = '#FFF';
    Chart.defaults.plugins.tooltip.borderWidth = 1;
    Chart.defaults.plugins.tooltip.borderColor = 'rgb(226, 232, 240)';
    Chart.defaults.plugins.tooltip.displayColors = false;
    Chart.defaults.plugins.tooltip.mode = 'nearest';
    Chart.defaults.plugins.tooltip.intersect = false;
    Chart.defaults.plugins.tooltip.position = 'nearest';
    Chart.defaults.plugins.tooltip.caretSize = 0;
    Chart.defaults.plugins.tooltip.caretPadding = 20;
    Chart.defaults.plugins.tooltip.cornerRadius = 4;
    Chart.defaults.plugins.tooltip.padding = 8;
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("CalendarChart", {
      type: 'line',
      data: {
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9',
        ],
        datasets: [
          // Indigo line
          {
            label: 'Current',
            data: [
              5000, 8700, 7500, 12000, 11000, 0, 0,
              0, 0,
            ],
            fill: true,
            backgroundColor: 'rgba(16, 4, 31, 0.9)',
            borderColor: 'rgb(255, 255, 255, 0.3)',
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: 'rgb(16, 4, 31)',
          },
          // Gray line
          {
            label: 'Previous',
            data: [
              8000, 5000, 6500, 5000, 6500, 12000, 8000,
              9000, 10000,
            ],
            borderColor: 'rgb(255, 255, 255, 0.3)',
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: 'rgb(255, 255, 255, 0.7)',
          },
        ],
      },
      options: {
        layout: {
          padding: 0,
        },
        scales: {
          y: {
            beginAtZero: true,
            display: false,
          },
          x: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        maintainAspectRatio: false,
        animation: {
          onComplete: () => {
            this.delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !this.delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
    });
  }
}
