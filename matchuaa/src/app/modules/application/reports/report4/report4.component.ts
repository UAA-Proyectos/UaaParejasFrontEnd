import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report4',
  templateUrl: './report4.component.html',
  styleUrls: ['./report4.component.scss']
})
export class Report4Component implements OnInit {

  constructor(private reportsService: ReportsService) { }
  data: number | null = null
  ngOnInit(): void {
    this.reportsService.getReport4().subscribe((data: any)=> {
      this.data = data.total_matches
    })

  }

}
