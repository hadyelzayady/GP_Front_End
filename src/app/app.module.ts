import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ArduinoComponent } from './arduino/arduino.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    SidenavComponent,
    ArduinoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
