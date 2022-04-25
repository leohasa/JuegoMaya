import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { CardService } from 'src/app/service/card.service';

@Component({
    selector: 'app-game-grid',
    templateUrl: './game-grid.component.html',
    styleUrls: ['./game-grid.component.css'],
})
export class GameGridComponent implements OnInit {

    tarjetas: string[] = [];
    randomCards: Array<Card>;
    level:number;

    constructor(private cardService: CardService) {}

    ngOnInit(): void {
        this.level = Number.parseInt(
            localStorage.getItem('level') ?? '0'
        );
        for (let index = 0; index < this.level; index++) {
            this.tarjetas.push('');
        }

        this.randomCards = this.cardService.getRandomCards(this.level);
        console.log(this.randomCards);
    }

    getIndex(i: number, j: number) {
        return (this.level*i)+j;
    }
}
