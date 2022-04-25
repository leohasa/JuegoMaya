import { Injectable } from '@angular/core';
import { Nahual } from '../model/nahual';
import data from '../data/nahualData.json';

@Injectable({
  providedIn: 'root'
})
export class NahualService {
  dataNahual: Array<Nahual>;
  constructor() { 
    this.dataNahual = data as Array<Nahual>
  }
  getRandomNahual(): Array<Nahual> {

    
    return this.dataNahual.sort(() => Math.random() - 0.5);;
}

}
