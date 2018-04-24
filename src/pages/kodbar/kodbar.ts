import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-kodbar',
  templateUrl: 'kodbar.html',
})
export class KodbarPage {

  kodbarPage = KodbarPage;

  constructor ( private barcodeScanner: BarcodeScanner){
  }  
}
