import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report7',
  templateUrl: './report7.component.html',
  styleUrls: ['./report7.component.scss']
})
export class Report7Component implements OnInit {

  constructor(private reportService:ReportsService) { }

  data: number | null = null
  ngOnInit(): void {
    this.reportService.getReport7().subscribe((data: any)=> {
      this.data = data[0].edad_promedio
    })

  }

}
