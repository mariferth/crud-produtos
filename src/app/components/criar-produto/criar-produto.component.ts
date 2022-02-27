import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent implements OnInit {

  public nome : string | undefined;
  public preco : number | undefined;

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  public salvar() {
    if(!this.nome) {
      alert("Nome é obrigatório!");
      return;
    }
    if(!this.preco) {
      alert("Preço é obrigatório!");
      return;
    }
    this._router.navigate(["/listaDeProdutos", this.nome, this.preco]);
  }
}
