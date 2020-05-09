import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { CardComponent } from './card/card.component';
import { FullCardComponent } from './fullcard/fullcard.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    CardComponent,
    FullCardComponent,
    HomeComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
