import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report-two',
  templateUrl: './report-two.component.html',
  styleUrls: ['./report-two.component.scss']
})
export class ReportTwoComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }
  
  orientations:any=[]

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
  
  


  ngOnInit(): void {
  this.reportsService.getReport2().subscribe((data)=> {
    data.forEach((e:any) => {
      const name = e.name;
      const value = e.porcentaje;
      this.orientations.push({ name, value })
    })
    console.log(this.orientations)
  })
  }

  
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
