import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-level-selector',
    templateUrl: './level-selector.component.html',
    styleUrls: ['./level-selector.component.css'],
})
export class LevelSelectorComponent implements OnInit {
    title: string;
    localStorage = localStorage;
    levelValues: string[];

    constructor() {
        this.title = 'Elegir dificultad';
        this.levelValues = ['Fácil', 'Medio', 'Difícil'];
    }

    ngOnInit(): void {}

    selectLevel(level: string) {
        // this.localStorage.setItem('started', 'true');
    }
}
