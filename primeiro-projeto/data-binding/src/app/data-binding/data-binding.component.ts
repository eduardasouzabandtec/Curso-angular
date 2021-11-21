import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.google.com';
  urlImage: string = 'http://lorempixel.com/400/200/nature/'

  getValor() {
    return 20 + 20;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
