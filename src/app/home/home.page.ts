import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
declare var cordova;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  temperatura: any;
  gpos700: any;
  window: any;
  orientation_locked: true;

  constructor(
      private camera: Camera,
      private router: Router
  ) 
  {
      this.gpos700 = cordova.plugins.gpos7centos;
  }

  startCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.temperatura = 40;
    }, (err) => {

    });
    // this.temperatura = 40;

  }

  codigobarras1() {
    this.router.navigate(['codigobarras1']);
  }

  codbarrasv2() {
    // this.gpos700.leitorCodigoV2();
    this.gpos700.leitorCodigoV2({}, (res) => {
      console.log(JSON.stringify(res))
    }, (er) => 
    {
      console.log(JSON.stringify(er))
    });
    
  }
  
  impressao() {
    this.router.navigate(['imprimir']);
  }

  nfcGedi() {
    this.gpos700.leitorNfcGedi();
  }

  nfcId() {
    // this.gpos700.leitorNfcId();
  }

  onSuccess() {
    console.log('deu certo');
  }
  onFailure() {
    console.log('deu merda');
  }

}
