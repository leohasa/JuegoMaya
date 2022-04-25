import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { NumeracionComponent } from './mathematics/numeracion/numeracion.component';
import { CalcComponent } from './mathematics/calc/calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ContentComponent } from './mathematics/content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyGeneralComponent } from './body-general/body-general.component';
import { FooterGeneralComponent } from './footer-general/footer-general.component';
import { AdivinadorComponent } from './adivinador/adivinador.component';
import { NahualComponent } from './nahual/nahual.component';
import { BotonDinamicoComponent } from './boton-dinamico/boton-dinamico.component';
import { JuegoEnlaceComponent } from './juegoEnlace/juegoEnlace.component';
@NgModule({
  declarations: [
    AppComponent,
    MathematicsComponent,
    NumeracionComponent,
    CalcComponent,
    ContentComponent,
    NavbarComponent,
    BodyGeneralComponent,
    FooterGeneralComponent,
    AdivinadorComponent,
    NahualComponent,
    BotonDinamicoComponent,
    JuegoEnlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
