import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report9',
  templateUrl: './report9.component.html',
  styleUrls: ['./report9.component.scss']
})
export class Report9Component implements OnInit {

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Estado';
    showYAxisLabel = true;
    yAxisLabel = 'Cantidad de usuarios';
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    view: [number, number] = [1000, 0];
 

    
  user_state:any[] = []

  constructor(private reportsService:ReportsService) { }

  ngOnInit(): void {
    this.reportsService.getReport9().subscribe((data: any[]) => {
      data.forEach((e: any) => {
        const name = e.location;
        const value = e.cantidad;
        this.user_state.push({ name, value })
      })
      console.log(this.user_state)
    })
  }

}
