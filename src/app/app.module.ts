import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from "./app.firebase.config";

//import { HomemainPage } from '../pages/homemain/homemain';
import { LogmasukPage } from '../pages/logmasuk/logmasuk';
import { KodbarPage } from '../pages/kodbar/kodbar';
import { ProdukbaruPage } from '../pages/produkbaru/produkbaru';
import { MakpropenggunaPage } from '../pages/makpropengguna/makpropengguna';
import { CarianpropenggunaPage } from '../pages/carianpropengguna/carianpropengguna';
import { KodepenggunaPage } from '../pages/kodepengguna/kodepengguna';
//import { HomepentadbirPage } from '../pages/homepentadbir/homepentadbir';
import { MaklogopenggunaPage } from '../pages/maklogopengguna/maklogopengguna';
import { MakpropentadbirPage } from '../pages/makpropentadbir/makpropentadbir';
import { PilihkemaskinimakproPage } from '../pages/pilihkemaskinimakpro/pilihkemaskinimakpro';
import { KodepentadbirPage } from '../pages/kodepentadbir/kodepentadbir';
import { MaklogopentadbirPage } from '../pages/maklogopentadbir/maklogopentadbir';
import { PilihkemaskinimaklogoPage } from '../pages/pilihkemaskinimaklogo/pilihkemaskinimaklogo';
import { TabsPage } from '../pages/tabs/tabs';

import { SenaraiProdukService } from './../services/senarai-produk/senarai-produk.service';
import { SenaraiMakProService } from './../services/senarai-produk/senarai-makpro.service';
import { ToastService } from '../services/toast/toast.service';
import { SenaraiLogoService } from './../services/senarai-logo/senarai-maklogo';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    //HomemainPage,
    LogmasukPage,
    KodbarPage,
    ProdukbaruPage,
    MakpropenggunaPage,
    CarianpropenggunaPage,
    KodepenggunaPage,
    MaklogopenggunaPage,
    //HomepentadbirPage,
    MakpropentadbirPage,
    KodepentadbirPage,
    MaklogopentadbirPage,
    PilihkemaskinimakproPage,
    PilihkemaskinimaklogoPage,
    TabsPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomemainPage,
    LogmasukPage,
    KodbarPage,
    ProdukbaruPage,
    MakpropenggunaPage,
    CarianpropenggunaPage,
    KodepenggunaPage,
    MaklogopenggunaPage,
    //HomepentadbirPage,
    MakpropentadbirPage,
    KodepentadbirPage,
    MaklogopentadbirPage,
    PilihkemaskinimakproPage,
    PilihkemaskinimaklogoPage,
    TabsPage,
  ],
  providers: [ StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SenaraiProdukService, SenaraiMakProService,
    ToastService, SenaraiLogoService, 
    FileChooser, File,
    Transfer,
    Camera,
    FilePath, BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
