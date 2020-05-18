import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
declare var cordova;

@Component({
  selector: 'app-codigobarras1',
  templateUrl: './codigobarras1.page.html',
  styleUrls: ['./codigobarras1.page.scss'],
})
export class Codigobarras1Page implements OnInit {
  gpos700: any;
  resultadosBarCod: any;
  teste: any;
  items = [];

  constructor() { 
    this.gpos700 = cordova.plugins.gpos7centos;
  }

  ngOnInit() {
  }

  EAN_8() {
    // this.teste = this.gpos700.leitorCodigo1("EAN_8");
    // this.gpos700.leitorCodigo1("EAN_8");
    this.gpos700.leitorCodigo1({barCode: "EAN_8"}, (res) => {
      console.log(JSON.stringify(res));
      this.items.push(res);
    }, (er) => 
    {
      this.items.push(er);
    });
  }

  EAN_13() {
    // this.teste = this.gpos700.leitorCodigo1("EAN_13");
    this.gpos700.leitorCodigo1({barCode: "EAN_13"}, (res) => {
      console.log(JSON.stringify(res))
      this.items.push(res);
    }, (er) => 
    {
      this.items.push(er);
    });
  }

  EAN_14(){
    this.teste = this.gpos700.leitorCodigo1({barCode: "EAN_14"}, (res) => {
      console.log(JSON.stringify(res))
      this.items.push(res);
    }, (er) => 
    {
      this.items.push(er);
    });
  }

  QR_CODE(){
    this.teste = this.gpos700.leitorCodigo1({barCode: "QR_CODE"}, (res) => {
      console.log(JSON.stringify(res))
      this.items.push(res);
    }, (er) => 
    {
      this.items.push(er);
    });
  }
}
