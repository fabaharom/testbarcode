import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomemainPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyCZBeTYfnfmrtcrQkWRABl0byJscftXBkg",
      authDomain: "projekpsm-944b0.firebaseapp.com",
      databaseURL: "https://projekpsm-944b0.firebaseio.com",
      projectId: "projekpsm-944b0",
      storageBucket: "projekpsm-944b0.appspot.com",
      messagingSenderId: "830109212645"
    });
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

