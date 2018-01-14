import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  logIn(username,password)
  {
     this.username = username;
     this.password = password;
     //alert(this.username +" "+this.password);
  
  }

  register(firstname,lastname,username,email,password,passwordconfirmation){

    this.firstname = firstname;
    this.lastname = lastname;
    this.username_reg = username;
    this.email = email;
    this.password_reg = password;
    this.passwordconfirmation = passwordconfirmation;


  //alert(this.firstname+" "+this.lastname+" "+this.username_reg+" "+this.email+" "+this.password_reg+" "+ this.passwordconfirmation);



  }


  

}
