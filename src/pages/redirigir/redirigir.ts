import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-redirigir',
  templateUrl: 'redirigir.html',
})
export class RedirigirPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedirigirPage');
  }
  next(){
    this.navCtrl.push(TabsPage);
  }

}
