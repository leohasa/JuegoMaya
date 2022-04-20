import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathematicsComponent } from './mathematics/mathematics.component';

const routes: Routes = [
  { path: 'math', component: MathematicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
