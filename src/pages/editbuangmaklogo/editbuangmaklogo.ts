import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Klogo } from "../../models/kemaskinilogo";
import { SenaraiLogoService } from '../../services/senarai-logo/senarai-maklogo';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-editbuangmaklogo',
  templateUrl: 'editbuangmaklogo.html',
})
export class EditbuangmaklogoPage {

klogo : Klogo;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private product: SenaraiLogoService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.klogo = this.navParams.get('klogo');
  }

  saveItem(klogo: Klogo){
    this.product.editItem(klogo). then(() => {
      this.toast.show(`MAKLUMAT LOGO ${klogo.negara} TELAH DIKEMASKINI!`);
    });
  }

  removeItem(klogo: Klogo){
    this.product.removeItem(klogo)
    .then(() => {
      this.toast.show(`${klogo.negara} TELAH DIPADAM!`);
    })
  }
}
