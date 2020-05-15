import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
declare var cordova;

@Component({
  selector: 'app-codigobarrasv2',
  templateUrl: './codigobarrasv2.page.html',
  styleUrls: ['./codigobarrasv2.page.scss'],
})
export class Codigobarrasv2Page implements OnInit {

  // gpos700: any;
  resultadosBarCod: any;
  teste: any;
  public items:any;

  constructor(private camera: Camera) { 
    // this.gpos700 = cordova.plugins.gpos7centos;
  }

  ngOnInit() {
  }

  EAN_8() {
    // this.teste = this.gpos700.leitorCodigo1("EAN_8");
    // this.gpos700.leitorCodigo1("EAN_8");
    // this.gpos700.leitorCodigoV2({}, (res) => {
    //   console.log(JSON.stringify(res))
    // }, (er) => 
    // {
    //   console.log(JSON.stringify(er))
    // });
  }

}
