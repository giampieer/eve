import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {BarcodeScannerOptions} from "@ionic-native/barcode-scanner";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-redirigir',
  templateUrl: 'redirigir.html',
})
export class RedirigirPage {
  scanData : {};
  options :BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedirigirPage');
  }
  next(){
    this.navCtrl.push(TabsPage);
  }
  scan(){
    this.options = {
      prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
      this.navCtrl.push(TabsPage);
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }

}
