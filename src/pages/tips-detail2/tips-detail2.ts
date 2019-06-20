import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TipsDetail3Page} from "../tips-detail3/tips-detail3";
import {TextToSpeech} from "@ionic-native/text-to-speech";

@Component({
  selector: 'page-tips-detail2',
  templateUrl: 'tips-detail2.html',
})
export class TipsDetail2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsDetail2Page');
  }
  voiceText() {
    var parrafo = "Llegue al Aeropuerto con 3 horas antes a la salida de su vuelos. Presente pasaporte y boleto aéreo para ingresar. Acceso solo para pasajeros. Revise las restricciones del equipaje.";
    this.assistant("Los pasajeros que realicen vuelos internacionales deberán contar con pasaporte vigente, cualquiera sea la edad del pasajero, sean niños o incluso recién nacidos.  Debe contar con visa para el país de destino, según requerimiento.  Si los pasajeros son menores de edad y viajan con uno de los padres o sin acompañantes, deberán presentar un permiso notarial.  Consulte con su línea aérea los requisitos de menores de edad y visa.");
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
  nextDetail3(){
    this.navCtrl.push(TipsDetail3Page);
  }
}
