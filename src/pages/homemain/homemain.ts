import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogmasukPage } from "../logmasuk/logmasuk";
import { KodbarPage } from "../kodbar/kodbar";
import { MakpropenggunaPage } from '../makpropengguna/makpropengguna';
import { CarianpropenggunaPage } from '../carianpropengguna/carianpropengguna';
import { MaklogopenggunaPage } from '../maklogopengguna/maklogopengguna';
import { ProdukbaruPage } from '../produkbaru/produkbaru';
import { KodepenggunaPage } from '../kodepengguna/kodepengguna';


@IonicPage()
@Component({
  selector: 'page-homemain',
  templateUrl: 'homemain.html',
})
export class HomemainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToLogmasuk(){
    this.navCtrl.push(LogmasukPage);
  }

  onGoToKodbar(){
    this.navCtrl.push(KodbarPage);
  }

  onGoToProdukbaru(){
    this.navCtrl.push(ProdukbaruPage);
  }
  
  onGoToMakpropengguna(){
    this.navCtrl.push(MakpropenggunaPage);
  }

  onGoToCarianpropengguna(){
    this.navCtrl.push(CarianpropenggunaPage);
  }

  onGoToKodepengguna(){
    this.navCtrl.push(KodepenggunaPage);
  }

  onGoToMaklogopengguna(){
    this.navCtrl.push(MaklogopenggunaPage);
  }

}
