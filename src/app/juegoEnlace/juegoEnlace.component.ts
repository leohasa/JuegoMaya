import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { logica } from 'src/assets/logica';
import { MovimientoService } from '../service/movimiento.service';

@Component({
  selector: 'app-juegoEnlace',
  templateUrl: './juegoEnlace.component.html',
  styleUrls: ['./juegoEnlace.component.css']
})
export class JuegoEnlaceComponent implements OnInit {
  logica1:logica | undefined;
  datos:Array<string[]> | undefined;
  mensaje:Array<string[]> = new Array;
  level:number = 3;
  tipoJuego:string = "kines";
  color:any;
  constructor(private funcionServicio:MovimientoService,private componentFactory:ComponentFactoryResolver) { 
  }

  ngOnInit(): void {
    this.logica1= new logica();
    this.funcionServicio.set(this.logica1);
    if(this.logica1!=undefined)this.mensaje = this.logica1?.getMensaje();
  }

  iniciar(level:number){
    if(this.logica1){
      this.level = level;
    }
  }

  tipoDatos(entrada:string){
    if(this.logica1){
      this.tipoJuego = entrada;
    }
  }

  iniciarJuego(){
    if(this.logica1){
      this.logica1.setTipoDatos(this.tipoJuego);
      this.datos = this.logica1.getDatos(this.level);
    }
    this.mensaje.length = 0;
  }
  
}
