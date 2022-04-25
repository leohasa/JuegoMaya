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
    }

    stopGame() {
        this.localStorage.setItem('started', 'false');
    }
}
