import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NamePage} from "../pages/name/name";
import {ViajeTypePage} from "../pages/viaje-type/viaje-type";
import {HttpClientModule} from "@angular/common/http";
import {QrPage} from "../pages/qr/qr";
import {TipsPage} from "../pages/tips/tips";
import {ScannerPage} from "../pages/scanner/scanner";
import {RedirigirPage} from "../pages/redirigir/redirigir";
import {TipsDetail2Page} from "../pages/tips-detail2/tips-detail2";
import {TipsDetail3Page} from "../pages/tips-detail3/tips-detail3";
import {TipsDetailPage} from "../pages/tips-detail/tips-detail";
import {TipsDetail4Page} from "../pages/tips-detail4/tips-detail4";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NamePage,
    ViajeTypePage,
    QrPage,
    TipsPage,
    ScannerPage,
    RedirigirPage,
    TipsDetail2Page,
    TipsDetail3Page,
    TipsDetailPage,
    TipsDetail4Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NamePage,
    ViajeTypePage,
    QrPage,
    TipsPage,
    ScannerPage,
    RedirigirPage,
    TipsDetail2Page,
    TipsDetail3Page,
    TipsDetailPage,
    TipsDetail4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
