import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import {TipsPage} from "../tips/tips";
import {QrPage} from "../qr/qr";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TipsPage;
  tab2Root = QrPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
