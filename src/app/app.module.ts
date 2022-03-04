import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeProdutosComponent,
    CriarProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
