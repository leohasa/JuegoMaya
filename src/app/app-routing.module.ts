import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { NumeracionComponent } from './mathematics/numeracion/numeracion.component';

const routes: Routes = [
  { path: 'math', component: MathematicsComponent },
  { path: 'num', component: NumeracionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
