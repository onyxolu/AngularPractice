import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Ilogindetails } from './user/logindetails';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private authservice: AuthService) {}

  loginDetails: Ilogindetails = {
    username: "",
    password: ""
  }



  ngOnInit() {
  }

  Login(formValue): void {
    this.loginDetails.username = formValue.username;
    this.loginDetails.password = this.hashPassword(formValue.password);
    console.log(this.loginDetails);
    console.log(formValue);
    console.log(this.authservice.LoginDetailsCheck(this.loginDetails));
  }



  hashPassword(password): any {
    return password.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
  }

}
