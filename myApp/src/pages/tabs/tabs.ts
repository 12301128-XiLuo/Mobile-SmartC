import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { DevicePage } from '../device/device';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DevicePage;  
  tab3Root = SettingsPage;

  constructor() {

  }
}
