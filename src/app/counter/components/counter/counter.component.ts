import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <p>Counter: {{counter}} </p>

  <button (click)="modifyValue(-1)">-1</button>
  <button (click)="resetValue()">Reset</button>
  <button (click)="modifyValue(+1)">+1</button>
  `
})

export class CounterComponent{
  public counter:number = 10;


  modifyValue(value:number):void{
    this.counter += value;
  }

  resetValue(){
    this.counter = 10;
  }

}
