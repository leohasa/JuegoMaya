import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-info-game-selector',
    templateUrl: './info-game-selector.component.html',
    styleUrls: ['./info-game-selector.component.css'],
})
export class InfoGameSelectorComponent implements OnInit {
    title: string;
    localStorage = localStorage;
    infoValues: string[];

    constructor() {
        this.title = 'Elegir contenido del juego';
        this.infoValues = ['kines', 'nahuales'];
    }

    ngOnInit(): void {}

    selectInfo(info: string) {
        // this.localStorage.setItem('started', 'true');
    }
}
