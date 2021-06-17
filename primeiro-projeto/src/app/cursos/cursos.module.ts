import { NgModule } from '@angular/core';
// modulo de funcionalidade
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  //As declarations que queremos exportar
  exports:[
    CursosComponent
  ],
  //services
  providers: [
    CursosService
  ]
})
export class CursosModule { }
