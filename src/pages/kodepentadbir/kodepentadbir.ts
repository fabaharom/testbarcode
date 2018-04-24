import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera } from 'ionic-native';
import firebase from 'firebase';

@Component({
  selector: 'page-kodepentadbir',
  templateUrl: 'kodepentadbir.html',
})
export class KodepentadbirPage {
  public DatapentadbirRef: any;
  public Datapentadbir: any;
  public DatapentadbirURL: any;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController) {
    this.DatapentadbirRef = firebase.storage().ref('/Kode/');
  }

  selectPhoto(): void {
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: Camera.EncodingType.PNG,
    }).then(imageData => {
      this.Datapentadbir = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  private uploadPhoto(): void {
    this.DatapentadbirRef.child(this.generateUUID()).child('kode.png') //kode.png
    .putString(this.Datapentadbir, 'base64', { contentType: 'image/png'})
    .then ((savedPicture) => {
      this.DatapentadbirURL = savedPicture.downloadURL;
    });
  }

  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor (d/16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid) {
        this.toast.create({
          message: `Gambar anda telah berjaya disimpan ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: `Maaf ! Muatnaik gambar anda tidak berjaya.`,
          duration: 3000
        }).present();
      }
    })
  }
}
