import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoEnlaceComponent } from './juegoEnlace/juegoEnlace.component';
import { CalcComponent } from './mathematics/calc/calc.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { NumeracionComponent } from './mathematics/numeracion/numeracion.component';

const routes: Routes = [
  { path: 'math', component: MathematicsComponent },
  { path: 'math/num', component: NumeracionComponent },
  { path: 'math/calc', component: CalcComponent },
  { path: 'juegoEnlazar', component: JuegoEnlaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
