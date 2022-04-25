import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoEnlaceComponent } from './juegoEnlace/juegoEnlace.component';
import { CalcComponent } from './mathematics/calc/calc.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { NumeracionComponent } from './mathematics/numeracion/numeracion.component';
import { MemoryGameComponent } from './components/memory-game/memory-game.component';
import { BodyGeneralComponent } from './body-general/body-general.component';
import { AdivinadorComponent } from './adivinador/adivinador.component';

const routes: Routes = [
    { path: '', component: BodyGeneralComponent },
    { path: 'math', component: MathematicsComponent },
    { path: 'math/num', component: NumeracionComponent },
    { path: 'math/calc', component: CalcComponent },
    { path: 'juegoEnlazar', component: JuegoEnlaceComponent },
    { path: 'memory', component: MemoryGameComponent },
    { path: 'adivina', component: AdivinadorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
