import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KodbarPage } from './kodbar';

@NgModule({
  declarations: [
    KodbarPage,
  ],
  imports: [
    IonicPageModule.forChild(KodbarPage),
  ],
})
export class KodbarPageModule {}
