import { Component, Input } from '@angular/core';// Importa os módulos necessários do Angular
import { Categoria } from 'src/models/categoria.model';// Importa a classe de modelo 'Categoria' do arquivo 'categoria.model.ts'

@Component({
  selector: 'fil-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  // Declara uma variável de entrada (input property) chamada 'categoria'
  @Input() categoria!: Categoria;
}
