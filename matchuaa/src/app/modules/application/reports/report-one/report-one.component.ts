import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report-one',
  templateUrl: './report-one.component.html',
  styleUrls: ['./report-one.component.scss']
})
export class ReportOneComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }
  data: number | null = null
  ngOnInit(): void {
    this.reportsService.getReport1().subscribe((data) => {this.data = data.total_active_users})
  }



}
