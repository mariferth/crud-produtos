import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {
  public nome : string | undefined;
  public preco : number | undefined;
  private indice : number = -1;

  constructor(private _router : Router, 
    private _actRoute : ActivatedRoute,
    private _produtoService : ProdutosService) { }

  ngOnInit(): void {
    this._actRoute.params.subscribe((parametros) => {
      //console.log(parametros["indice"]);
      if (parametros["indice"]) {
        this.indice = parametros["indice"];
        let produto = this._produtoService.getProduto(this.indice);
        this.nome = produto.getNome();
        this.preco = produto.getPreco();
      }
    });
  }

  public salvar() {
    //console.log(this.nome + " " + this.preco);
    if(!this.nome) {
      alert("Nome é obrigatório!");
      return;
    }
    if(!this.preco) {
      alert("Preço é obrigatório!");
      return;
    }
    let produto = new Produto(this.nome, this.preco);
    if(this._produtoService.editarProduto(this.indice, produto)){
      alert("Produto editado com sucesso!");
      this._router.navigate(["/listaDeProdutos"]);
    }
    else {
      alert("Erro ao salvar produto!");
    }
}
/*
    if(this.indice == -1) {
      let produto = new Produto(this.nome, this.preco);
      this.lista_produtos.push(produto);
      alert("Produto cadastrado com sucesso!");
    }
    else {
      this.lista_produtos[this.indice].setNome(this.nome);
      this.lista_produtos[this.indice].setPreco(this.preco);
      alert("Produto alterado com sucesso!");
      this.edicao = false;
      this.indice = -1;
    }
    
    this.nome = undefined;
    this.preco = undefined;
  */

}
