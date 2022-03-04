import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss']
})

export class ListaDeProdutosComponent implements OnInit {
  public lista_produtos : Produto[] = [];

  constructor(private _router : Router, 
    private produtoService : ProdutosService) {

    }
    /*private _actRoute : ActivatedRoute) {
      this._actRoute.params.subscribe((parametros)=>{
        if (parametros["nome"] && parametros["preco"]) {
          this.lista_produtos.push(new Produto (
            parametros["nome"],
            parametros["preco"]
          ))
        }
      });
    }*/

  ngOnInit(): void {
    this.lista_produtos = this.produtoService.getProdutos();
    /*let produto = new Produto("Camisa", 200);
    this.lista_produtos.push(produto);
    this.lista_produtos.push(new Produto("Camiseta", 50));
    this.lista_produtos.push(new Produto("Calça", 100));*/
  }

  public excluir(indice : number) {
    // Usando service
    let resultado = confirm("Deseja excluir o produto " + this.produtoService.getProduto(indice).getNome() + "?");
    if(resultado) {
      if (this.produtoService.excluirProduto(indice)) {
        alert("Produto excluído com sucesso!")
      }
      else {
        alert("Erro ao excluir produto!")
      }
    }
    // Sem service
    /*this.lista_produtos.splice(index, 1);
    alert("Produto excluído com sucesso!")*/
  }

  public editar(indice : number) : void {
    this._router.navigate(["/editarProduto", indice]);
  }

  public irParaCriarProduto() {
    this._router.navigate(["/criarProduto"]);
  }

}
