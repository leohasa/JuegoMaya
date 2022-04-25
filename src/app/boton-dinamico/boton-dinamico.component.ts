import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import { MovimientoService } from '../service/movimiento.service';
@Component({
  selector: 'app-boton-dinamico',
  templateUrl: './button.component.html',
  styleUrls:['app-boton-dinamico.component.css']
})
@Injectable({providedIn:'any'})
export class BotonDinamicoComponent implements OnInit{
  @Input()
    setText(name: string) {
      this.buttonText = name.toUpperCase();
    }
    get name(): string {
      return this.buttonText;
    }
    setId(id:string){
      this.identifierName = id;
    }
    setClase(clase:string){
      this.clase = clase;
    }
    @Input() color: string = '0068B4';
    @Input() type: string = 'button';
    @Input() isDisabled = false;
    @Input() identifierName = "button";
    @Input() buttonText = 'button';
    @Input() clase:string = "izquierdo";
    
    
    @Output() salidaInfo = new EventEmitter<string>();
    
    enviarPapito(value:string) {
      this.salidaInfo.emit(this.identifierName);
    }

    mover2:Function;
       
    constructor(private funcionServicio:MovimientoService) {}
  ngOnInit(): void {
    this.mover2 = this.funcionServicio.get().controlador;
  }
}
