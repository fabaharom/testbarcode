import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomemainPage } from './homemain';

@NgModule({
  declarations: [
    HomemainPage,
  ],
  imports: [
    IonicPageModule.forChild(HomemainPage),
  ],
})
export class HomemainPageModule {}
