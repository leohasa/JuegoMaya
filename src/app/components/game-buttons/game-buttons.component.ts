import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game-buttons',
    templateUrl: './game-buttons.component.html',
    styleUrls: ['./game-buttons.component.css'],
})
export class GameButtonsComponent implements OnInit {

    localStorage = localStorage;

    constructor() {}

    ngOnInit(): void {}

    playGame() {
        this.localStorage.setItem('started', 'true');
        this.localStorage.setItem('parejas', '0');
    }

    stopGame() {
        this.localStorage.removeItem('cardUp1');
        this.localStorage.removeItem('cardUp2');
        this.localStorage.setItem('started', 'false');
        this.localStorage.setItem('win', 'false');
    }
}
