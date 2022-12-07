import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report6',
  templateUrl: './report6.component.html',
  styleUrls: ['./report6.component.scss']
})
export class Report6Component implements OnInit {

  user_inbox: any = []
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'número de mensajes';
    showYAxisLabel = true;
    yAxisLabel = 'Usuarios';
    // options
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    view: [number, number] = [1000, 0];

  constructor(private reportsService:ReportsService) { }

  ngOnInit(): void {
    this.reportsService.getReport6().subscribe((data: any[])=> {
      data.forEach((e:any) => {
        const name = e.username;
        const value = e.count;
        this.user_inbox.push({ name, value })
      })
    })
  }

}
