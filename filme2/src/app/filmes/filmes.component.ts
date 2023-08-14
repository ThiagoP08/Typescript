// import { Component } from '@angular/core';
import { Filme } from 'src/models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'fil-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {
  filmes: Filme[] = [
    {id: "0", titulo: "John Wick", img: "/assets/img/johnw.jpg", genero: 1},
    {id: "1", titulo: "Assassino a Preço Fixo", img: "/assets/img/assassinprefix.jpg", genero: 1},
    {id: "2", titulo: "O Protetor", img: "/assets/img/protetor.jpg", genero: 1},
    {id: "3", titulo: "Mistério no Mediterrâneo", img: "/assets/img/misteriomedi.jpg", genero: 2},
    {id: "4", titulo: "Gente Grande", img: "/assets/img/gentegrande.jpg", genero: 2},
    {id: "5", titulo: "Juntos e Misturados", img: "/assets/img/juntosmisturado.jpg", genero: 2},
    {id: "6", titulo: "Sexta Feira 13", img: "/assets/img/sexta13.jpg", genero: 3},
    {id: "7", titulo: "", img: "/assets/img/.jpg", genero: 3},
    // {id: "", titulo: "", img: "/assets/img/.jpg", genero: },
  ] 

  generoSelecionado: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.generoSelecionado = Number(params['genero']);
    });
  }
}
