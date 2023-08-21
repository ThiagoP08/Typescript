// Importações de módulos e componentes necessários para a configuração da aplicação
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { SobreComponent } from './sobre/sobre.component';
import { ROUTES } from './app.routes'; // Arquivo de definição das rotas
import { RouterModule } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { CategoriasService } from './categorias/categorias.service'; // Serviço para categorias
import { HttpClientModule } from '@angular/common/http'; // Módulo para realizar requisições HTTP
import { FilmesService } from './filmes/filmes.service'; // Serviço para filmes

@NgModule({
  declarations: [ // Lista de componentes, diretivas e pipes que fazem parte deste módulo
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CategoriasComponent,
    CategoriaComponent,
    SobreComponent,
    FilmesComponent
  ],
  imports: [ // Outros módulos que são importados e usados neste módulo
    BrowserModule, // Módulo para funcionamento no navegador
    AppRoutingModule, // Módulo de configuração de rotas
    RouterModule.forRoot(ROUTES), // Configuração das rotas da aplicação
    HttpClientModule // Módulo para realizar requisições HTTP
  ],
  providers: [ // Serviços que estão disponíveis globalmente para a aplicação
    CategoriasService, // Serviço para categorias
    FilmesService // Serviço para filmes
  ],
  bootstrap: [AppComponent] // Componente raiz que é criado quando a aplicação inicia
})
export class AppModule { }
