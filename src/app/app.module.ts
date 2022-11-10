import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttendantItemComponent } from './attendant-item/attendant-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendantItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
