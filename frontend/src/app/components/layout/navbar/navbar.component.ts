import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbarStyle.css']
})
export class NavbarComponent implements OnInit {
  arrayItems: Array<string> = [];
  
  constructor() {

       
   }

  ngOnInit() {
  }

  onSignIn(){
  	alert("HELLLOOOOO");
  }

  onSubmit(search){
   
   window.location.href = '/'+search;
  


  }

}
