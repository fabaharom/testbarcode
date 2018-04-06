import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SenaraiMakProService } from '../../services/senarai-produk/senarai-makpro.service';
import { Kproduk } from "../../models/kemaskiniproduk";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-carianpropengguna',
  templateUrl: 'carianpropengguna.html',
})
export class CarianpropenggunaPage {

  searchQuery: string = '';
  senaraiMakPro: string[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();  
  }

  initializeItems(){
    this.senaraiMakPro = [
      'London Plus Potato Bites',
      'Potato Roll BlueBerry Bread',
      'Cloud 9 Strawberry Candy',
      'Air Mineral Semula Jadi UTHM',
      'Dynamite Choco-filled Mind Candy',
    
    ];
  }

  getItems(ev: any) {
    this.initializeItems();

    let val=ev.target.value;

    if(val && val.trim() != ''){
      this.senaraiMakPro = this.senaraiMakPro.filter((kproduk) => {
        return (kproduk.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarianpropentadbirPage');
  }
}
