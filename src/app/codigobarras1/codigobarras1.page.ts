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

  constructor(private camera: Camera) { 
    this.gpos700 = cordova.plugins.gpos7centos;
  }

  ngOnInit() {
  }

  EAN_8() {
    // this.teste = this.gpos700.leitorCodigo1("EAN_8");
    // this.gpos700.leitorCodigo1("EAN_8");
    this.gpos700.leitorCodigo1({barCode: "EAN_8"}, (res) => {
      console.log(JSON.stringify(res))
    }, (er) => 
    {
      console.log(JSON.stringify(er))
    });
  }

  EAN_13() {
    // this.teste = this.gpos700.leitorCodigo1("EAN_13");
    this.gpos700.leitorCodigo1({barCode: "EAN_13"}, (res) => {
      console.log(JSON.stringify(res))
    }, (er) => 
    {
      console.log(JSON.stringify(er))
    });
  }

  EAN_14(){
    this.teste = this.gpos700.leitorCodigo1({barCode: "EAN_14"}, (res) => {
      console.log(JSON.stringify(res))
    }, (er) => 
    {
      console.log(JSON.stringify(er))
    });
  }

  QR_CODE(){
    this.teste = this.gpos700.leitorCodigo1({barCode: "QR_CODE"}, (res) => {
      console.log(JSON.stringify(res))
    }, (er) => 
    {
      console.log(JSON.stringify(er))
    });
  }

}
