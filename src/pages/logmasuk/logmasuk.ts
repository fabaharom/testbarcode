import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pentadbir } from '../../models/pentadbir';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-logmasuk',
  templateUrl: 'logmasuk.html',
})
export class LogmasukPage {

  pentadbir = {} as Pentadbir 

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(pentadbir: Pentadbir){
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(pentadbir.email, pentadbir.password);
      if (result) {
        this.navCtrl.setRoot('HomepentadbirPage');
      }
    }
    catch (e) {
      console.error (e);
    }
  }

  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad LogmasukPage');
  //}

}
