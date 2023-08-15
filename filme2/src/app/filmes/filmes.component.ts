// import { Component } from '@angular/core';
import { Filme } from 'src/models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'fil-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {
  filmes: Filme[] = [];
  generoSelecionado: number | null = null;

  constructor(private service: FilmesService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.generoSelecionado = Number(params['genero']);
      this.service.listarFilmes().subscribe(filmes => {
        this.filmes = filmes.filter(filme => filme.genero == this.generoSelecionado);
      });
    });
  }
}