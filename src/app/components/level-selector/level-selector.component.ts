import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-level-selector',
    templateUrl: './level-selector.component.html',
    styleUrls: ['./level-selector.component.css'],
})
export class LevelSelectorComponent implements OnInit {
    title: string;
    localStorage = localStorage;
    levelValues: any[];

    constructor() {
        this.title = 'Elegir dificultad';
        this.levelValues = [
            { name: 'Fácil', valor: 4 },
            { name: 'Medio', valor: 6 },
            { name: 'Difícil', valor: 8},
        ];
    }

    ngOnInit(): void {}

    selectLevel(level: string) {
        this.localStorage.setItem('level', level);
    }
}
