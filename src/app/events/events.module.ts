import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventRoutingModule } from './event-routing.module';




@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventsModule { }
