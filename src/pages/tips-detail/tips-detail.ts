import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TipsDetail2Page} from "../tips-detail2/tips-detail2";
import {TextToSpeech} from "@ionic-native/text-to-speech";

@Component({
  selector: 'page-tips-detail',
  templateUrl: 'tips-detail.html',
})
export class TipsDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsDetailPage');
  }
  nextDetail(){
    this.navCtrl.push(TipsDetail2Page);
  }
  voiceText() {
    var parrafo = "Llegue al Aeropuerto con 3 horas antes a la salida de su vuelos. Presente pasaporte y boleto aéreo para ingresar. Acceso solo para pasajeros. Revise las restricciones del equipaje.";
    this.assistant(parrafo);
  }
  assistant(frase){
    this.tts.speak({
      text: frase,
      locale: 'es-PE',
      rate: 1
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

}
