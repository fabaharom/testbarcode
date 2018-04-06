import { SenaraiLogoService } from './../../services/senarai-logo/senarai-maklogo';
import { Klogo } from './../../models/kemaskinilogo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PilihkemaskinimaklogoPage } from "../pilihkemaskinimaklogo/pilihkemaskinimaklogo";
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-maklogopentadbir',
  templateUrl: 'maklogopentadbir.html',
})
export class MaklogopentadbirPage {

  klogo : Klogo = {
    negara: undefined,
    organisasi: undefined,
    alamat: undefined,
    nama: undefined,
    notelefon: undefined,
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private product: SenaraiLogoService,
    private toast: ToastService) {
  }

  onGoToPilihkemaskinimaklogo(){
    this.navCtrl.push(PilihkemaskinimaklogoPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MaklogopentadbirPage');
  }

  addItem(klogo: Klogo){
    this.product.addItem(klogo).then(ref => {
      this.toast.show(`MAKLUMAT BARU LOGO ${klogo.negara} DITAMBAH!` );
    });
  }

}
