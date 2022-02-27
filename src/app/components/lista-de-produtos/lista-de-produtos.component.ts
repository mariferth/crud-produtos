import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss']
})

export class ListaDeProdutosComponent implements OnInit {
  public lista_produtos : Produto[] = [];
  constructor(private _router : Router, 
    private _actRoute : ActivatedRoute) {
      this._actRoute.params.subscribe((parametros)=>{
        if (parametros["nome"] && parametros["preco"]) {
          this.lista_produtos.push(new Produto (
            parametros["nome"],
            parametros["preco"]
          ))
        }
      });
    }

  ngOnInit(): void {
    let produto = new Produto("Camisa", 200);
    this.lista_produtos.push(produto);
    this.lista_produtos.push(new Produto("Camiseta", 50));
    this.lista_produtos.push(new Produto("Calça", 100));
  }

  public excluir(index : number) {
    this.lista_produtos.splice(index, 1);
    alert("Produto excluído com sucesso!")
  }

  public editar(index : number) : void {
  }

  public irParaCriarProduto() {
    this._router.navigate(["/criarProduto"]);
  }

}
