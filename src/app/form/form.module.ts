import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    FormComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
  ]
})
export class FormModule { }
