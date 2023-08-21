import { NgModule } from '@angular/core';// Importa o módulo NgModule do Angular
import { RouterModule, Routes } from '@angular/router';// Importa o módulo RouterModule e a interface Routes para configuração de rotas

const routes: Routes = [];// Define um array vazio chamado 'routes' que será usado para configurar as rotas

// Cria um módulo chamado AppRoutingModule usando o NgModule
@NgModule({
  // Configura o módulo de roteamento com as rotas definidas no array 'routes'
  imports: [RouterModule.forRoot(routes)],
  // Exporta o RouterModule para que possa ser usado em outros módulos
  exports: [RouterModule]
})
// Define a classe AppRoutingModule
export class AppRoutingModule { }
