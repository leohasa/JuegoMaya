import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/model/card';
import { DataService } from 'src/app/service/data.service';

@Component({
    selector: 'app-card-game',
    templateUrl: './card-game.component.html',
    styleUrls: ['./card-game.component.css'],
})
export class CardGameComponent implements OnInit, OnDestroy {
    @Input() card: Card;
    @Input() index: number;
    discovered: boolean = false;

    @Output() salida = new EventEmitter<boolean>();

    localStorage = localStorage;

    suscripcion: Subscription;

    constructor(private dataService: DataService) {}

    ngOnDestroy(): void {
        this.suscripcion.unsubscribe();
    }

    ngOnInit(): void {
        this.suscripcion = this.dataService.getData().subscribe((data) => {
            if (data.discover && this.card.id == data.idCard) {
                this.discovered = true;
            }
        });
    }

    cardUp(): boolean {
        if (
            this.localStorage.getItem('cardUp1') == this.index + '' ||
            this.localStorage.getItem('cardUp2') == this.index + ''
        ) {
            return true;
        }
        return false;
    }

    up() {
        if(!this.discovered) {
            if(!this.localStorage.getItem('cardUp1') || ! this.localStorage.getItem('cardUp2')) {
                if (this.localStorage.getItem('cardUp1')) {
                    if(this.localStorage.getItem('cardUp1') != (this.index + '')) {
                        this.localStorage.setItem('cardUp2', this.index + '');
                        this.salida.emit(true);
                    }
                } else {
                    this.localStorage.setItem('cardUp1', this.index + '');
                }
            }
        }
    }
}
