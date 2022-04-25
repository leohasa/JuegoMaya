import { Component, OnInit } from '@angular/core';
import { NahualComponent } from '../nahual/nahual.component';
import { Nahual } from '../model/nahual';
import { NahualService } from '../service/nahual.service';

@Component({
  selector: 'app-adivinador',
  templateUrl: './adivinador.component.html',
  styleUrls: ['./adivinador.component.css']
})
export class AdivinadorComponent implements OnInit {

  randomNahuales: Array<Nahual>;

constructor(private nahualService: NahualService) 
{ }

  ngOnInit(): void {
   this.randomNahuales = this.nahualService.getRandomNahual();
   console.log(this.randomNahuales);
  }

}
