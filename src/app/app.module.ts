import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RandomKartComponent } from './random-kart/random-kart.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RandomKartComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
