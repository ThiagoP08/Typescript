import { Injectable } from "@angular/core";
import { Filme } from "src/models/categoria.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API } from "../app.api";

@Injectable()
export class FilmesService {
  constructor(private http: HttpClient) {}

  listarFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${API}/filmes`);
  }
}