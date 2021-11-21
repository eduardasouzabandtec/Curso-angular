import { NgModule } from '@angular/core';
//prepara a aplicação para ser rodada em um Browser/navegador
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { TestComponent } from './test/test.component';

// decorator para dizer que será um modulo
@NgModule({
  //Components, diretivas e pipes
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    TestComponent
  ],
  //Outros modulos que serão utilizadoss
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  //Servços que vão ficar disponiveis para todos os declarations
  providers: [],
  //Somente no module raiz, o serviço conteiner, view port, component principal
  bootstrap: [AppComponent]
})
export class AppModule { }
