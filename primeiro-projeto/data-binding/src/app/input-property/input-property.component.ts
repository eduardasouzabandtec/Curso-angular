import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  // dessa forma eu "recebo" a variavel
  // como nome e exponho como nomeCurso
  // se fosse o mesmo nome : 
  //  @Input() nome:string = '';
  // ou no @Components colocar :
  // inputs: ['nomeCurso:nome'] (não usar)
  // daria o mesmo que :
  
  @Input('nome') nomeCurso:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
