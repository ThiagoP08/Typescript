// import { Component } from '@angular/core';
import { Categoria } from 'src/models/categoria.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fil-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias: Categoria[] = [
    {id: "1", titulo: "Ação", img: "/assets/img/action.png",genero: 1},
    {id: "2", titulo: "Comedia", img: "/assets/img/comedy.png",genero: 2},
    {id: "3", titulo: "terror", img: "/assets/img/horror.png",genero: 3}
  ] 
  
  @Output() categoriaSelecionada = new EventEmitter<number>();

  selecionarCategoria(genero: number) {
    this.categoriaSelecionada.emit(genero);
  }

}