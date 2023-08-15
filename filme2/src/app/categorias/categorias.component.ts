// import { Component } from '@angular/core';
import { Categoria } from 'src/models/categoria.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'fil-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias!: Categoria[];

  constructor(private service: CategoriasService){}

  ngOnInit(){
    this.service.listarCategorias().subscribe(categorias => this.categorias = categorias);
  }
  
  @Output() categoriaSelecionada = new EventEmitter<number>();

  selecionarCategoria(genero: number) {
    this.categoriaSelecionada.emit(genero);
  }

}