import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as MyGlobals from '../../../service/globals';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbarStyle.css'],
 
})



export class NavbarComponent implements OnInit {
  arrayItems: Array<string> = [];
  autentificare:string="";
  search:string= ' ';
   
  
  constructor() {

  
    if(MyGlobals.user_id !=0)
    {
      //Pune drop down;
     
      //this.autentificare="Log out";
    }
    else{
      
      //this.autentificare ="Log in";
      //alert(this.autentificare);
    }

       
   }

  ngOnInit() {

    //this.autentificare="Log in";

    
  }

  onSignIn(){
  	alert("HELLLOOOOO");
  }

  onSubmit(search){
   
   window.location.href = '/'+search;
  


  }

 

}
