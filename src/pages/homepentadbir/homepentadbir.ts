import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MakpropentadbirPage } from '../makpropentadbir/makpropentadbir';
import { MaklogopentadbirPage } from '../maklogopentadbir/maklogopentadbir';
import { KodepentadbirPage } from '../kodepentadbir/kodepentadbir';
import { HomemainPage } from '../homemain/homemain';

@IonicPage()
@Component({
  selector: 'page-homepentadbir',
  templateUrl: 'homepentadbir.html',
})
export class HomepentadbirPage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, 
    public navCtrl: NavController, public navParams: NavParams) {
    }

    onGoToMakpropentadbir(){
      this.navCtrl.push(MakpropentadbirPage);
    }

    onGoToKodepentadbir(){
      this.navCtrl.push(KodepentadbirPage);
    }

    onGoToMaklogopentadbir(){
      this.navCtrl.push(MaklogopentadbirPage);
    }

    onGoToHomemain(){
      this.navCtrl.push(HomemainPage);
    }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid) {
        this.toast.create({
          message: `Anda telah berada di ruangan kemaskini Aplikasi SAH HALAL MALAYSIA, ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: `Maaf ! Sila masukkan id dan kata laluan semula.`,
          duration: 3000
        }).present();
      }
    })
  }

  logout(){
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot('HomemainPage');
  }
}
