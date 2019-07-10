import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  userName: string;
  password: string;


  ngOnInit() {
  }

  Login(formValue): void {
    console.log(formValue);
  }

}
