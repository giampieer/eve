import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViajeTypePage} from "../viaje-type/viaje-type";

@Component({
  selector: 'page-name',
  templateUrl: 'name.html',
})
export class NamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NamePage');
  }
  next(){
    this.navCtrl.push(ViajeTypePage);
  }

}
