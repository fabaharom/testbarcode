import { SenaraiProdukService } from './../../services/senarai-produk/senarai-produk.service';
import { Produk } from './../../models/produk.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-produkbaru',
  templateUrl: 'produkbaru.html',
})
export class ProdukbaruPage {

  produk : Produk = {
    kodbar:undefined,
    nama:undefined,
    negara:undefined,
  };
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private product: SenaraiProdukService,
    private toast: ToastService 
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukbaruPage');
  }

  addItem(produk: Produk) {
    this.product.addItem(produk).then(ref =>{
      this.toast.show(`PRODUK BARU ${produk.nama} TELAH DIHANTAR UNTUK PENGESAHAN!` );
    });
  }

}
