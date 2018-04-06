import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


import { SenaraiMakProService } from '../../services/senarai-produk/senarai-makpro.service';
import { Kproduk } from "../../models/kemaskiniproduk";

@IonicPage()
@Component({
  selector: 'page-makpropengguna',
  templateUrl: 'makpropengguna.html',
})
export class MakpropenggunaPage {

  senaraiMakPro$: Observable<Kproduk[]>;

  constructor(public navCtrl: NavController, 
    private product: SenaraiMakProService,
  ){
    this.senaraiMakPro$ = this.product
    .getSenaraiMakProList() //return DB list
    .snapshotChanges() // give us key and value
    .map(changes => {
      return changes.map(c =>({
        key: c.payload.key,
        ...c.payload.val()
      }))
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakpropentadbirPage');
  }

}
