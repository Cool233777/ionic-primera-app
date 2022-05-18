import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}//podemos crear variables u objetos que se mostraran en el tab1

  ngOnInit() {
    let numero = 10;
    numero =20;
    numero = numero +10;
    numero = 0;
    console.log(numero);
  }

}

