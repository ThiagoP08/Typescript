import { Routes } from "@angular/router";
import { BodyComponent } from "./body/body.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { SobreComponent } from "./sobre/sobre.component";
import { FilmesComponent } from "./filmes/filmes.component";

export const ROUTES: Routes = [
    {path: '', component: BodyComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'filme',  component: FilmesComponent},
    { path: 'filme/:genero', component: FilmesComponent },
];