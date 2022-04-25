import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import data from '../data/MayanData.json';

@Injectable({
    providedIn: 'root',
})
export class CardService {

    dataCards: Array<Card>;

    constructor() {
        this.dataCards = data as Array<Card>;
    }

    getRandomCards(level: number): Array<Card> {
        let noCards = (level * level) / 2;
        let array: Array<Card> = new Array();

        while(array.length < noCards) {
            let index = Math.floor(Math.random() * 39);
            let temp: Card = this.dataCards[index];

            if(!array.find(e => e.id == temp.id)) {
                array.push(temp);
            }
        }

        array = array.concat(array);
        array = array.sort(() => (Math.random() - 0.5));

        return array;
    }

}
