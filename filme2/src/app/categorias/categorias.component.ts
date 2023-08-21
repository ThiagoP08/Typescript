import { Categoria } from 'src/models/categoria.model';// Importa a classe Categoria do arquivo categoria.model.ts
import { Component, Output, EventEmitter } from '@angular/core';// Importa os módulos Component, Output e EventEmitter do Angular
import { CategoriasService } from './categorias.service';// Importa o serviço CategoriasService que será injetado neste componente

// Define o decorador @Component para configurar esse componente
@Component({
  selector: 'fil-categorias', // Define o seletor do componente (usado no HTML)
  templateUrl: './categorias.component.html', // Define o arquivo HTML associado a este componente
  styleUrls: ['./categorias.component.css'] // Define os estilos CSS associados a este componente
})
export class CategoriasComponent {
  categorias!: Categoria[]; // Declara uma variável categorias que vai armazenar a lista de categorias

// Construtor do componente que recebe uma instância do serviço CategoriasService
  constructor(private service: CategoriasService) {}

// Método executado quando o componente é inicializado
  ngOnInit() {
    this.service.listarCategorias().subscribe(categorias => this.categorias = categorias);// Chama o método listarCategorias do serviço e se inscreve para receber a lista de categorias
  }
  
  @Output() categoriaSelecionada = new EventEmitter<number>();// Declara um EventEmitter chamado categoriaSelecionada que emitirá valores do tipo number

// Método que emite um evento com o gênero da categoria selecionada
  selecionarCategoria(genero: number) {
    this.categoriaSelecionada.emit(genero);
  }
}
