import { Component, OnInit } from '@angular/core';
import * as express from 'express';
//import { ApiService } from '../../../service/';
import { ApiService } from '../../../service/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./signIn.css']
})
export class SignInComponent implements OnInit {

  username:string;
  password:string;
  firstname:string;
  lastname:string;
  username_reg:string;
  password_reg:string;
  passwordconfirmation:string;
  email:string;
  user1:User;
  
  //constructor(private apiService: ApiService) { }

  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit() {


  }

 // logIn(username,password)
  //{

   //  this.username = username;
    // this.password = password;
    //alert(this.username+this.password);
  //}
  
  logIn(loginUsername, loginPassword) {
    this.apiService.get('api/user/username_password/' + loginUsername + '&' + loginPassword).subscribe(res => {
      console.log(res);
    if(res!='404')
    {
      alert("Welcome "+loginUsername);
      window.location.href = '/profile';
    }
    });
  }

  register(firstname,lastname,username,email,password,passwordconfirmation){

    this.firstname = firstname;
    this.lastname = lastname;
    this.username_reg = username;
    this.email = email;
    this.password_reg = password;
    this.passwordconfirmation = passwordconfirmation;
    var firstName = firstname;
    var lastName = lastname;

    //alert(username+password);
    

    this.apiService.post('api/user/createUser/',{username,password}).subscribe(res => {
      console.log(res);
    });

    

    this.apiService.post('api/person/createPerson/', {firstName,lastName,email}).subscribe(res => {
      console.log(res);
    });

    alert("V-ati inregistrat cu succes");

  //alert(this.firstname+" "+this.lastname+" "+this.username_reg+" "+this.email+" "+this.password_reg+" "+ this.passwordconfirmation);

  }
}

interface User{
 
  username:string;
  password:string;
  userType:string;
}

