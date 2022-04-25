import { Component, OnInit, Input } from '@angular/core';
import { Nahual } from '../model/nahual';
import { NahualService } from '../service/nahual.service';

@Component({
  selector: 'app-nahual',
  templateUrl: './nahual.component.html',
  styleUrls: ['./nahual.component.css']
})
export class NahualComponent implements OnInit {

  @Input() nahual: Nahual;
  respuestas: Array<string>;
  randomNahuales: Array<Nahual>;

  correcta: boolean;
  intento: boolean;

  constructor(private nahualService: NahualService) {
    this.correcta = false;
    this.intento = false;
  }

  ngOnInit(): void {
    this.randomNahuales = this.nahualService.getRandomNahual();
    this.respuestas = this.getRespuestas(this.nahual.nombre);
  }

  verificar(resp: string) {
    if(resp == this.nahual.nombre) {
      this.correcta = true;
    } else {
      this.correcta = false;
    }
    this.intento = true;
  }

  getRespuestas(respCorrecta: string) {
    let respuestas: Array<string> = new Array();
    respuestas.push(respCorrecta);

    while (respuestas.length < 4) {
      let index = Math.floor(Math.random() * 20);
      let nahual:Nahual = this.randomNahuales[index];

      if (!respuestas.find((e) => e == nahual.nombre)) {
          respuestas.push(nahual.nombre);
      }

    }

    respuestas = respuestas.sort(() => Math.random() - 0.5);

    return respuestas;

  }

}
