import { Component, OnInit, ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Renderer2 } from '@angular/core';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, AfterContentInit {


  total:number = 1000;
  reservados:number = 1;
  numeros: Array<string> = new Array(this.total);
  @ViewChildren('numeroBt') numeroBt:QueryList<any>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.carregarNumeros();
   }
 
  ngAfterContentInit(): void {
    console.log(this.numeroBt);
  }

  private carregarNumeros() {
    for(let i=0; i < this.numeros.length; i++){
      this.numeros[i] =this.padZero(i,3);
    }
  }

  /**
   * reservar
   * event,numero   
  */
  public reservar(e,component,numero) {
    e.stopPropagation();
    e.preventDefault();

    const hasClass = component.classList.contains("item_disponivel");

    if(hasClass) {
      this.renderer.removeClass(component, "item_disponivel");
      this.renderer.addClass(component, "item_reservado");
    }

    component.lastElementChild.children[1].innerText  = "check_box";

    console.log(numero);
  }

  /**
  * padZero
  * numero:number, tamanho:number   
  */
  public padZero(numero:number, tamanho:number) {
  var str = ""+  numero;
    while(str.length <tamanho){
        str = "0"+str;
    }
    return str;
  }
  

}
