import { SenaraiProdukService } from './../../services/senarai-produk/senarai-produk.service';
import { Produk } from './../../models/produk.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../services/toast/toast.service';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-produkbaru',
  templateUrl: 'produkbaru.html',
})
export class ProdukbaruPage {

  produk : Produk = {
    gambar:undefined,
    kodbar:undefined,
    nama:undefined,
    negara:undefined,
  };

  scanData : {};
  options :BarcodeScannerOptions;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private product: SenaraiProdukService,
    private toast: ToastService,
    private barcodeScanner: BarcodeScanner 
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukbaruPage');
  }

  scan(){
    this.options = {
      prompt : "Sila imbas kodbar pada produk anda"
  }
  this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
    }, (err) => {
      console.log("Error occured : " + err);
    });         
  }

  addItem(produk: Produk) {
    this.product.addItem(produk).then(ref =>{
      this.toast.show(`PRODUK BARU ${produk.nama} TELAH DIHANTAR UNTUK PENGESAHAN!` );
    });

  
  }

}
