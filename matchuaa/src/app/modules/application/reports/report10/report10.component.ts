import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report10',
  templateUrl: './report10.component.html',
  styleUrls: ['./report10.component.scss']
})
export class Report10Component implements OnInit {

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mes';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad de usuarios';
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  view: [number, number] = [1000, 0];
  meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];



  active_months: any[] = []

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.reportsService.getReport10().subscribe((data: any[]) => {
      data.forEach((e: any) => {
        const name = this.meses[e.mounth-1];
        const value = e.count;
        this.active_months.push({ name, value })
      })
      console.log(this.active_months)
    })
  }


}
