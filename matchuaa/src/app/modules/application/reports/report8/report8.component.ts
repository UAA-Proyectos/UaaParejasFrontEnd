import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report8',
  templateUrl: './report8.component.html',
  styleUrls: ['./report8.component.scss']
})
export class Report8Component implements OnInit {
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Signo';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad';
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  view: [number, number] = [1000, 0];
  user_zodiac: any[] = []

  signos: string[] = ["Paso... 😒", "Aries ♈", "Tauro ♉", "Géminis ♊", "Cáncer ♋", "Leo ♌", "Virgo ♍", "Libra ♎", "Escorpión ♏", "Sagitario ♐", "Capricornio ♑", "Acuario ♒", "Piscis ♓"]



  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.reportsService.getReport8().subscribe((data: any[]) => {
      data.forEach((e: any) => {
        if(e.cantidad == 0)
            return
        const name = this.signos[e.zodiac_sign];
        const value = e.cantidad;
        this.user_zodiac.push({ name, value })

      })
    })
  }

}
