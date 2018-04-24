import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import jQuery from "jquery";

import { LogmasukPage } from "../logmasuk/logmasuk";
import { KodbarPage } from "../kodbar/kodbar";
import { MakpropenggunaPage } from '../makpropengguna/makpropengguna';
import { CarianpropenggunaPage } from '../carianpropengguna/carianpropengguna';
import { MaklogopenggunaPage } from '../maklogopengguna/maklogopengguna';
import { ProdukbaruPage } from '../produkbaru/produkbaru';
import { KodepenggunaPage } from '../kodepengguna/kodepengguna';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';


@IonicPage()
@Component({
  selector: 'page-homemain',
  templateUrl: 'homemain.html',
})
export class HomemainPage /*implements OnInit*/ {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {}

    /*ngOnInit(){
    }*/
  
  scan(){
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Barcode data', barcodeData);
    }).catch (err => {
      console.log('Error', err);
    });         
  }
      //success! Barcode data is here
      /*var kodbar = barcodeData.text;
      jQuery.ajax({
        url:"https://cms.goodkredit.tk/test/firebase_read/?kodbar="+kodbar, 
        type: "POST", 
        dataType: "json", 
        success: function(data){
          alert(data);
        }
      })*/

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
