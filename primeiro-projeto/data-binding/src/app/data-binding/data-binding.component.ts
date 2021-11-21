import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.google.com';
  urlImage: string = 'http://lorempixel.com/400/200/nature/'
  valorAtual: string = '';
  valorEnter: string = '';
  nome: any = 'eu';
  nomeDoCurso: string = 'Angular top';
  valorInicio: number = 10;
  getValor() {
    return 20 + 20;
  }
  click() {
    alert('TESTANDOOOOW');
  }
  onKey(evento: KeyboardEvent) {
  this.valorAtual = ((<HTMLInputElement>evento.target).value)
  }
  onEnte(valor:any){
    this.valorEnter = valor;
  }
  onMudouValor(evento: any) {
    console.log(evento)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
