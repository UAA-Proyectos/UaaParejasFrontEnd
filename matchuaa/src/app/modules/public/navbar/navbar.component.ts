import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private myScriptElement: HTMLScriptElement;
  constructor() {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "assets/script.js";
    document.body.appendChild(this.myScriptElement);
   }

  ngOnInit(): void {
  }

}
