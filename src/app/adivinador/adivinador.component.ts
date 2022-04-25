import { Component, OnInit } from '@angular/core';
import { Nahual } from '../model/nahual';
import { NahualService } from '../service/nahual.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-adivinador',
  templateUrl: './adivinador.component.html',
  styleUrls: ['./adivinador.component.css']
})
export class AdivinadorComponent implements OnInit {

  randomNahuales: Array<Nahual>;

constructor(private nahualService: NahualService, private router: Router, private readonly viewport: ViewportScroller)
{ }

  ngOnInit(): void {
   this.randomNahuales = this.nahualService.getRandomNahual();
   console.log(this.randomNahuales);
  }

  newGame() {
    this.router.navigate(['adivina']);
    this.randomNahuales = this.nahualService.getRandomNahual();
    this.viewport.scrollToPosition([0, 0]);
  }

}
