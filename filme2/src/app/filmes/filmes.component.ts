// Importa as dependências necessárias
import { Filme } from 'src/models/categoria.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'fil-filmes', // Define o seletor do componente
  templateUrl: './filmes.component.html', // Define o arquivo HTML associado ao componente
  styleUrls: ['./filmes.component.css'] // Define os arquivos CSS associados ao componente
})
export class FilmesComponent {
  filmes: Filme[] = []; // Inicializa uma array vazia para armazenar os filmes
  generoSelecionado: number | null = null; // Inicializa a variável 'generoSelecionado' como nula

  constructor(private service: FilmesService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Registra um observador para detectar alterações na rota
    this.route.params.subscribe(params => {
      this.generoSelecionado = Number(params['genero']); // Obtém o gênero selecionado da URL
      // Chama o serviço para listar os filmes e filtra apenas os filmes com o gênero selecionado
      this.service.listarFilmes().subscribe(filmes => {
        this.filmes = filmes.filter(filme => filme.genero == this.generoSelecionado);
      });
    });
  }
}