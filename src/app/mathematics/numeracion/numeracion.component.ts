import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-numeracion',
  templateUrl: './numeracion.component.html',
  styleUrls: ['./numeracion.component.css']
})

export class NumeracionComponent implements OnInit {

  @ViewChild("result") p: ElementRef;
  @ViewChild("explain") code: ElementRef;

  valueNumber = new FormControl("0", [Validators.required, Validators.pattern("\d"), Validators.maxLength(10), Validators.minLength(1)]);


  constructor(private redender: Renderer2) {

    this.valueNumber.valueChanges
      .pipe(debounceTime(300))
      .subscribe(x => {
        this.calculateNumber(x)

      })
  }

  ngOnInit(): void {
  }

  numberVigesimal(num: any) {
    return num.toString(20).split("").map(function (s: any) { return parseInt(s, 20) });
  }
  
  calculateNumber(value: any) {
    
    let mayaValue = this.numberVigesimal(value);

    let mayan = mayaValue.map(function (n: any) {
      return String.fromCharCode(0xD834, 0xDEE0 + n);
    }).join('');

    
    this.p.nativeElement.innerText = mayan;

    let explain = mayaValue
      .map(function (n: any, i: any) {
        var expr =
          n === 0 ? "0" :
            n < 5 ? n % 5 :
              n
              ;

        var power = mayaValue.length - i - 1;
        return expr + " x 20^" + power+" = " + (n* Math.pow(20 , power));
      }).join("  \n") + "\n     Σ : "+ value ;
    this.code.nativeElement.innerText = explain;
    
     
  }
}
