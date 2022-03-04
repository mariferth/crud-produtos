import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent implements OnInit {

  public formCadastrar : FormGroup;
  /*public nome : string | undefined;
  public preco : number | undefined;*/

  constructor(private _router : Router, 
    private produtoService : ProdutosService, 
    private _formBuilder : FormBuilder) { 
      this.formCadastrar = this._formBuilder.group({
        nome : ["", [Validators.required, Validators.minLength(5)]],
        preco : ["", [Validators.required]]
      });
    }

  ngOnInit(): void {
  }

  private validarFormulario() {
    for (let campos in this.formCadastrar.controls) {
      this.formCadastrar.controls[campos].markAllAsTouched();
    }
  }

  public submitForm (){
    this.validarFormulario();
    if (!this.formCadastrar.valid) {
      return;
    }
    this.salvar();
  }

  public salvar() {
    /*if(!this.nome) {
      alert("Nome é obrigatório!");
      return;
    }
    if(!this.preco) {
      alert("Preço é obrigatório!");
      return;
    }*/

    if(this.produtoService.inserirProduto(new Produto(this.formCadastrar.controls["nome"].value, this.formCadastrar.controls["preco"].value))) {
      alert("Produto salvo com sucesso!");
      this._router.navigate(["/listaDeProdutos"]);
    }
    else {
      alert("Erro ao salvar produto!");
    }
  }
}
