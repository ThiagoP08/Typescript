import { Component, Input } from '@angular/core';// Importa os módulos necessários do Angular
import { Categoria } from 'src/models/categoria.model';// Importa a classe de modelo 'Categoria' do arquivo 'categoria.model.ts'

@Component({
  // Define o seletor personalizado para o componente
  selector: 'fil-categoria',

  // Define o arquivo HTML que será usado como template para este componente
  templateUrl: './categoria.component.html',

  // Define o arquivo de estilos CSS para este componente
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  // Declara uma variável de entrada (input property) chamada 'categoria'
  @Input() categoria!: Categoria;
}
