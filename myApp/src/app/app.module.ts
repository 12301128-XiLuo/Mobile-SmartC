import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }    from '@angular/http';

import { VideoPage } from '../pages/video/video';
import { MessagePage } from '../pages/message/message';
import { DevicePage } from '../pages/device/device';
import { TabsPage } from '../pages/tabs/tabs';
import { DeviceDetailPage } from '../pages/device/device-detail/deviceDetail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
//service
import { DeviceService } from './common/service/device.service';
import { BuildClassService } from './common/service/buildClass.service';
//pipe
import { BuildPipe } from './common/pipe/device.pipe';


@NgModule({
  declarations: [
    MyApp,
    VideoPage,
    MessagePage,
    DevicePage,
    TabsPage,
    DeviceDetailPage,
    BuildPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VideoPage,
    MessagePage,
    DevicePage,
    TabsPage,
    DeviceDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeviceService,
    BuildClassService
  ]
})
export class AppModule {}
