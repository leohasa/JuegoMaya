import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

    title: string;
    text1: string;
    text2: string;

  constructor() {
    this.title = 'Información';
    this.text1 = 'Juego de memoria con tematica del calendario maya Habb';
    this.text2 = 'Hay 3 niveles de dificultad';
  }

  ngOnInit(): void {
  }

}
