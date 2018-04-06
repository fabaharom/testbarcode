import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { SenaraiLogoService } from '../../services/senarai-logo/senarai-maklogo';
import { Klogo } from "../../models/kemaskinilogo";

@IonicPage()
@Component({
  selector: 'page-maklogopengguna',
  templateUrl: 'maklogopengguna.html',
})
export class MaklogopenggunaPage {

  senaraiLogo$: Observable<Klogo[]>;

  constructor(
    public navCtrl: NavController, 
    private product: SenaraiLogoService
  ) {
  
    this.senaraiLogo$ = this.product
      .getSenaraiLogo()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }))
      })
  }
}
