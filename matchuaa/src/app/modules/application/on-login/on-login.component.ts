import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-login',
  templateUrl: './on-login.component.html',
  styleUrls: ['./on-login.component.scss']
})
export class OnLoginComponent implements OnInit {

  constructor(public router:Router) { }

  isExpanded: boolean = false;


  ngOnInit(): void {
  }


}
