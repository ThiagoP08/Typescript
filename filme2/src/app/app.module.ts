import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AcaoComponent } from './acao/acao.component';
import { ComediaComponent } from './comedia/comedia.component';
import { DramaComponent } from './drama/drama.component';
import { FiccaoComponent } from './ficcao/ficcao.component';
import { SuspenseComponent } from './suspense/suspense.component';
import { TerrorComponent } from './terror/terror.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CategoriasComponent,
    AcaoComponent,
    ComediaComponent,
    DramaComponent,
    FiccaoComponent,
    SuspenseComponent,
    TerrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
