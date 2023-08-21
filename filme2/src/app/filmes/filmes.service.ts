// Importa as dependências necessárias
import { Injectable } from "@angular/core";
import { Filme } from "src/models/categoria.model";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";

@Injectable() // Marca a classe como um serviço injetável
export class FilmesService {
  constructor(private http: HttpClient) {} // Injeta o serviço HttpClient para fazer requisições HTTP

  listarFilmes(): Observable<Filme[]> {
    // Define um método para listar os filmes
    return this.http.get<Filme[]>(`${API}/filmes`).pipe(catchError(ErrorHandler.handleError));
    // Faz uma requisição HTTP GET para obter a lista de filmes a partir da URL definida em 'API'
    // Usa o operador 'pipe' para encadear uma operação de tratamento de erro usando 'catchError'
    // 'ErrorHandler.handleError' é uma função que trata os erros da requisição HTTP
  }
}
