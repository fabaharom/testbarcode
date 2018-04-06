import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GkodePage } from './gkode';

@NgModule({
  declarations: [
    GkodePage,
  ],
  imports: [
    IonicPageModule.forChild(GkodePage),
  ],
})
export class GkodePageModule {}
