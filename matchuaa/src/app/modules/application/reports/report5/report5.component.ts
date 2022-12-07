import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report5',
  templateUrl: './report5.component.html',
  styleUrls: ['./report5.component.scss']
})
export class Report5Component implements OnInit {

    // options
    view: [number, number] = [1000, 0];

    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Usuario';
    showYAxisLabel = true;
    yAxisLabel = 'Cantidad de matches';
    // options
    showLabels: boolean = true;
    isDoughnut: boolean = false;

  constructor(private reportsService: ReportsService) { }


  user_matchers: any = []

  ngOnInit(): void {

    this.reportsService.getReport5().subscribe((data: any[]) => {
      data.forEach((e: any) => {
        const name = e.email
        const value = e.count;
        this.user_matchers.push({ name, value })
      })
    })

  }

}
