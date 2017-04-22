import { Component } from '@angular/core';

import { VideoPage } from '../video/video';
import { MessagePage } from '../message/message';
import { DevicePage } from '../device/device';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DevicePage;
  tab2Root = VideoPage;
  tab3Root = MessagePage;

  constructor() {

  }
}
