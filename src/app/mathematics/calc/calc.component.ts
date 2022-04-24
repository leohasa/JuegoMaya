import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  @ViewChild("target") target: ElementRef;
  @ViewChild("result") result: ElementRef;
  @ViewChild("result") message: ElementRef;
  numberMayaList: [{}]
  resultList: [{}];
  button = false;
  showM = false;
  private valueTarget: number
  private racha : number ;

  valueNumber = new FormControl("0", [Validators.required, Validators.pattern("\d"), Validators.maxLength(10), Validators.minLength(1)]);

  constructor() {
    this.valueTarget = 0;
    this.valueNumber.valueChanges
      .pipe(debounceTime(300))
      .subscribe(x => {
        this.randomNumber(x)

      })
  }

  ngOnInit(): void {

  }

  onDrop(event: CdkDragDrop<[{}]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  onDropSuccess(event: CdkDragDrop<[{}]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      
      this.result.nativeElement.className = "error";
      this.message.nativeElement.innerText = "Intentalo Nuevamente";

      if (event.container.data[0]["Valor"] == this.valueTarget) {
        this.result.nativeElement.className = "succes col-8";
        this.message.nativeElement.innerText = "Excelente!";
        this.button = true;
        this.racha += 1;
      }else{
        this.racha = 0;
      }

      if (event.container.data.length > 1) {
        console.log(event.container.data.length)
        this.result.nativeElement.className = "error";
        this.button = false;
        this.racha = 0 ;
      }
    }

  }

  transformValue(numParameter) {


    console.log("antes", numParameter)
    let mayaValue = this.numberVigesimal(numParameter);

    console.log("after", numParameter)
    this.numberMayaList
      .push({
        "Valor": numParameter, "Representacion": mayaValue
          .map(function (n: any, i: any) {

            var expr =
              n === 0 ? "0" :
                n < 5 ? n % 5 :
                  n
              ;

            return String.fromCharCode(0xD834, 0xDEE0 + n);


          }
          ).join(" ")
      });


    this.numberMayaList.forEach(x => {
      console.log("valor", x["Valor"])
      console.log("Representacion", x["Representacion"])
    })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * (max - 0)) + 0;
  }
  numberVigesimal(num: any) {

    let valueVigesimal = num.toString(20).split("").map(function (s: any) { return parseInt(s, 20) });
    console.log(valueVigesimal)
    return valueVigesimal;

  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {

      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  randomNumber(x) {
    this.numberMayaList = [{}];
    this.numberMayaList.pop();
    this.valueTarget = this.getRandomInt(x);
    this.transformValue(this.valueTarget);
    let i: number = 4;

    while (i > 0) {
      this.transformValue(
        this.getRandomInt(x)
      );
      i--;
    }

    this.numberMayaList = this.shuffle(this.numberMayaList)

    this.target.nativeElement.innerText = "Elige el Numero:  '" + this.valueTarget + "'";
    this.resultList = [{}
    ];
    this.resultList.pop();
    console.log("List")
    this.resultList.forEach((x) => { console.log(x) })

  }
  siguiente() {
    console.log("siguiente")
    this.button = false;
    this.message.nativeElement.innerText = "Racha: " + this.racha;
    this.randomNumber(this.valueNumber.value)
  }
}
