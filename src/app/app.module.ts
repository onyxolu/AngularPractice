import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { EventsModule } from './events/events.module';
import { Page404Component } from './page404/page404.component';
import { LoaderComponent } from './loader/loader.component';
import { FormModule } from './form/form.module';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Page404Component,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormModule,
    ProductModule,
    EventsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
