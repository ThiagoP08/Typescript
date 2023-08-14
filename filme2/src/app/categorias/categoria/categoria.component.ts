import { Component, Input } from '@angular/core';
import { Categoria } from 'src/models/categoria.model';
@Component({
  selector: 'fil-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  @Input() categoria!: Categoria;
}
