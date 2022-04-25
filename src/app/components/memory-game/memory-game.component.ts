import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-memory-game',
    templateUrl: './memory-game.component.html',
    styleUrls: ['./memory-game.component.css'],
})
export class MemoryGameComponent implements OnInit {

    localStorage = localStorage;
    title: string;

    constructor() {
        this.title = 'Juego de Memoria Calendario Haab';
    }

    ngOnInit(): void {
        this.localStorage.setItem('started', 'false');
    }

    removeWin() {
        this.localStorage.removeItem('win');
    }
}
