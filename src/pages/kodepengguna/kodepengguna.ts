import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-kodepengguna',
  templateUrl: 'kodepengguna.html',
})
export class KodepenggunaPage {

  /*constructor(public navCtrl: NavController, public navParams: NavParams) {
  }*/

  items = [
    'Kod-e',
    'Enzim dan Alkohol',
    'Lemak',
    'Pastri dan Bakeri',
    'Perisa Makanan',
    'Tenusu'
  ];

  itemSelected (item: string) {
    console.log("Selected Item", item);
  }
}
