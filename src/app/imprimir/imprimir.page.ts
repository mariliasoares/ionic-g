import { Component, OnInit } from '@angular/core';
declare var cordova;

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.page.html',
  styleUrls: ['./imprimir.page.scss'],
})
export class ImprimirPage implements OnInit {
  gpos700: any;
  teste: any;

  constructor() {
    this.gpos700 = cordova.plugins.gpos7centos;
   }

  ngOnInit() {
  }

  checarImpressora() {
    this.gpos700.checarImpressora((res) => {
      this.teste = res;
    }, (err) => {
      this.teste = err;
    });
  }

  imprimirTexto() {
    // this.gpos700.imprimir();
    this.gpos700.imprimir({
      tipoImpressao: "Texto", 
      mensagem: "GPOS 700 Ionic",
      alinhar: "CENTER",
      opNegrito: true,
      opItalico: false,
      opSublinhado: true,
      font: "VECTRA.otf",
      size: 30
    }, (res) => {
      console.log(JSON.stringify(res))
    }, (er) => 
    {
      console.log(JSON.stringify(er))
    });
    
  }

  todasFunc() {
    this.gpos700.imprimir({
      tipoImpressao: "TodasFuncoes"
    }, (res) => {
      console.log(JSON.stringify(res))
    }, (er) => 
    {
      console.log(JSON.stringify(er))
    });
  }

  imprimirImagem() {
    this.gpos700.imprimir({
      tipoImpressao: "Imagem"
    }, (res) => {
      console.log(JSON.stringify(res))
    }, (er) => 
    {
      console.log(JSON.stringify(er))
    });
  }

  imprimirBarCode() {
    this.gpos700.imprimir({
      tipoImpressao: "CodigoDeBarra",
      height: 120,
      width: 120,
      barCode: "QR_CODE",
      mensagem: "amem"

    }, (res) => {
      console.log(JSON.stringify(res))
    }, (er) => 
    {
      console.log(JSON.stringify(er))
    });
  }
}
