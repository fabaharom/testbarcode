import { Component } from '@angular/core';

import { KodbarPage } from '../kodbar/kodbar';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = KodbarPage;

  constructor() {
  }
}
