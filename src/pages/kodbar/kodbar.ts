import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-kodbar',
  templateUrl: 'kodbar.html',
})
export class KodbarPage {

  scanData : {};
  options : BarcodeScannerOptions;
  constructor ( public navCtrl : NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }

  scan(){
    this.options = {
      prompt : "Sila imbas kod bar produk yang dipilih"
    }

    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData);
      this.scanData = barcodeData;
    }, (err) => {
      console.log("Ralat"+err);
    });
  }

}
