import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScannerPage} from "../scanner/scanner";

@Component({
  selector: 'page-viaje-type',
  templateUrl: 'viaje-type.html',
})
export class ViajeTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajeTypePage');
  }

  next(){
    this.navCtrl.push(ScannerPage);
  }

}
