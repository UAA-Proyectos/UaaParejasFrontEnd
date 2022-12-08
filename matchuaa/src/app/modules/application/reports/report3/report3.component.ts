import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report3',
  templateUrl: './report3.component.html',
  styleUrls: ['./report3.component.scss']
})
export class Report3Component implements OnInit {
  genders: any = [];


  view: [number, number] = [1000, 0];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Orientación sexual';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad de usuarios';
  // options
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  constructor(private resportsService: ReportsService) { }

  ngOnInit(): void {
    this.resportsService.getReport3().subscribe((data: any[]) => {
      data.forEach((e: any) => {
        const name = (e.gender == 1 ? "Mujeres" : "Hombres");
        const value = e.cantidad;
        this.genders.push({ name, value })
      })
      console.log(this.genders)
    })
  }

}
