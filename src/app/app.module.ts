import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { NavegadorComponent } from './shared/layout/navegador/navegador.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavegadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
