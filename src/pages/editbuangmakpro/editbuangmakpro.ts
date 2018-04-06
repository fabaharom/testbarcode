import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Kproduk } from "../../models/kemaskiniproduk";
import { SenaraiMakProService } from '../../services/senarai-produk/senarai-makpro.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-editbuangmakpro',
  templateUrl: 'editbuangmakpro.html',
})

export class EditbuangmakproPage {

  kproduk: Kproduk;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private product: SenaraiMakProService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.kproduk = this.navParams.get('kproduk');
  }

  saveItem(kproduk: Kproduk){
    this.product.editItem(kproduk).then(() => {
      this.toast.show(`MAKLUMAT ${kproduk.namap} TELAH DIKEMASKINI!`);
      //this.navCtrl.setRoot('HomepentadbirPage');
    });
  }

  removeItem(kproduk: Kproduk){
    this.product.removeItem(kproduk)
    .then(() => {
      this.toast.show(`${kproduk.namap} TELAH DIPADAM!`);
    })
  }
}
