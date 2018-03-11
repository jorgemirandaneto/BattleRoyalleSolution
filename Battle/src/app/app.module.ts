import { ServiceService } from './service.service';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaPcComponent } from './lista-pc/lista-pc.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ListaPcComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
