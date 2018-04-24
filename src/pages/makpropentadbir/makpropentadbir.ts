import { SenaraiMakProService } from './../../services/senarai-produk/senarai-makpro.service';
import { Kproduk } from '../../models/kemaskiniproduk';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PilihkemaskinimakproPage } from "./../../pages/pilihkemaskinimakpro/pilihkemaskinimakpro";
import { ToastService } from '../../services/toast/toast.service';
//import { BarcodeScanner }

@IonicPage()
@Component({
  selector: 'page-makpropentadbir',
  templateUrl: 'makpropentadbir.html',
})
export class MakpropentadbirPage {

  kproduk : Kproduk = {
    kodbar: undefined,
    namap: undefined,
    syarikat: undefined,
    kategori: undefined,
    status: undefined,
    bahan: undefined,
    negarap: undefined,
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private product: SenaraiMakProService,
    private toast: ToastService) {
  }

  onGoToPilihkemaskinimakpro(){
    this.navCtrl.push(PilihkemaskinimakproPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakpropentadbirPage');
  }

  addItem(kproduk: Kproduk){
    this.product.addItem(kproduk).then(ref =>{
      this.toast.show(`PRODUK BARU ${kproduk.namap} DITAMBAH!` );
    });
  }

}
