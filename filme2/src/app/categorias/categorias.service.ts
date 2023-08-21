import { Injectable } from "@angular/core";// Importa o decorador Injectable do Angular para marcar a classe como um serviço injetável
import { Categoria } from "src/models/categoria.model";// Importa a classe Categoria do arquivo categoria.model.ts
import { HttpClient } from "@angular/common/http";// Importa o módulo HttpClient do Angular para realizar requisições HTTP
import { Observable, catchError } from "rxjs";// Importa os módulos Observable e catchError do pacote 'rxjs' para trabalhar com observables e tratamento de erros
import { API } from "../app.api";// Importa a constante API que contém a URL base da API
import { ErrorHandler } from "../app.error-handler";// Importa o serviço ErrorHandler para lidar com erros

// Define a classe CategoriasService como um serviço injetável
@Injectable()
export class CategoriasService {
    // Construtor da classe que recebe uma instância do serviço HttpClient
    constructor(private http: HttpClient) {}

    // Método que faz uma requisição HTTP GET para listar as categorias da API
    listarCategorias(): Observable<Categoria[]> {
        // Utiliza o HttpClient para fazer a requisição GET e mapeia a resposta para um array de objetos Categoria
        // Também adiciona um operador catchError para tratar erros usando o ErrorHandler
        return this.http.get<Categoria[]>(`${API}/categorias`).pipe(catchError(ErrorHandler.handleError));
    }
}
