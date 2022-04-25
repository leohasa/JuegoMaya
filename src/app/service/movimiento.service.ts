import { Injectable } from '@angular/core';
import { logica } from 'src/assets/logica';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
  constructor() { }
  funcionGlobal:logica | undefined;
  set(entrada:any){
    this.funcionGlobal = entrada;
  }
  get():any{
    return this.funcionGlobal;
  }
}