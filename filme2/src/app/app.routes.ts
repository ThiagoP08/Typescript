// Importa o módulo Routes do Angular Router
import { Routes } from "@angular/router";

// Importa os componentes que serão associados às rotas
import { BodyComponent } from "./body/body.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { SobreComponent } from "./sobre/sobre.component";
import { FilmesComponent } from "./filmes/filmes.component";

// Define um array de rotas chamado 'ROUTES'
export const ROUTES: Routes = [
    { path: '', component: BodyComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'filme', component: FilmesComponent },
    { path: 'filme/:genero', component: FilmesComponent },
];
