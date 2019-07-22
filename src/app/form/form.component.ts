import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Ilogindetails } from './user/logindetails';
import * as CryptoJS from 'crypto-js'; 

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

    this.loginDetails.password = this.encrypt(formValue.password);

    // this.loginDetails.password = this.hashPassword(formValue.password);
    console.log(this.loginDetails);
    console.log(formValue);
    console.log(this.authservice.LoginDetailsCheck(this.loginDetails));
  }

  encrypt(password):any{
    let keys = "isw";
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(password.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
    // let key = "isw";
    // let iv = "pass";
    // // return CryptoJS.MD5(password);
    // var res = CryptoJS.AES.encrypt(password, key, iv);
    // console.log(res.key+"\n"+res.iv);
    //return CryptoJS.SHA512(JSON.stringify(password)).toString();
  }

}
