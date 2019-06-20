import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TipsDetail4Page} from "../tips-detail4/tips-detail4";

@Component({
  selector: 'page-tips-detail3',
  templateUrl: 'tips-detail3.html',
})
export class TipsDetail3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsDetail3Page');
  }
  gps(){
    this.navCtrl.push(TipsDetail4Page);
  }

}
