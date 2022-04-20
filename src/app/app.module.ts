import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { NumeracionComponent } from './mathematics/numeracion/numeracion.component';

@NgModule({
  declarations: [
    AppComponent,
    MathematicsComponent,
    NumeracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
