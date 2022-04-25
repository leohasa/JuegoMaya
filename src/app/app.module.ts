import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { BodyGeneralComponent } from './body-general/body-general.component';
import { FooterGeneralComponent } from './footer-general/footer-general.component';
import { AdivinadorComponent } from './adivinador/adivinador.component';
import { NahualComponent } from './nahual/nahual.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyGeneralComponent,
    FooterGeneralComponent,
    AdivinadorComponent,
    NahualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
