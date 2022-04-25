import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
    selector: 'app-card-game',
    templateUrl: './card-game.component.html',
    styleUrls: ['./card-game.component.css'],
})
export class CardGameComponent implements OnInit {

    @Input() card: Card;
    @Input() index: number;
    discovered: boolean = false;

    localStorage = localStorage;

    constructor() {
    }

    ngOnInit(): void {}

    cardUp(): boolean {
        if (
            this.localStorage.getItem('cardUp1') == this.index + "" ||
            this.localStorage.getItem('cardUp2') == this.index + ""
        ) {
            return true;
        }
        return false;
    }

    up() {
        if(this.localStorage.getItem('cardUp1')) {
            this.localStorage.setItem('cardUp2', this.index+"");
        } else {
            this.localStorage.setItem('cardUp1', this.index+"");
        }
    }
}
