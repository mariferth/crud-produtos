import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {
  public nome : string | undefined;
  public preco : number | undefined;

  constructor() { }

  ngOnInit(): void {
    
  
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
