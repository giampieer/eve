import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NamePage} from "../pages/name/name";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = NamePage;

  constructor(public platform: Platform, public statusBar: StatusBar, splashScreen: SplashScreen) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('android')) {
        //cambiar el color de statusbar al color primario de la app
        this.statusBar.backgroundColorByHexString('#1494BD');
      }
    });
  }
}
