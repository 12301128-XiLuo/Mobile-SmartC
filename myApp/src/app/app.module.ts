import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }    from '@angular/http';

import { VideoPage } from '../pages/video/video';
import { SettingsPage } from '../pages/settings/settings';
import { DevicePage } from '../pages/device/device';
import { TabsPage } from '../pages/tabs/tabs';
import { DeviceDetailPage } from '../pages/device/device-detail/deviceDetail';
import { BuildClassModalPage } from '../pages/device/device-detail/modal/buildClassModal';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
//service
import { DeviceService } from './common/service/device.service';
import { BuildClassService } from './common/service/buildClass.service';
import { UserService } from './common/service/user.service';
import { StorageService } from './common/service/storage.service';
import { MessageService } from './common/service/message.service';
//pipe
import { BuildPipe } from './common/pipe/device.pipe';
//import { usernameValidator } from './common/providers/validator';


@NgModule({
  declarations: [
    MyApp,
    VideoPage,
    SettingsPage,
    DevicePage,
    TabsPage,
    DeviceDetailPage,
    BuildClassModalPage,
    LoginPage,
    BuildPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VideoPage,
    SettingsPage,
    DevicePage,
    TabsPage,
    DeviceDetailPage,
    BuildClassModalPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeviceService,
    BuildClassService,
    UserService,
    StorageService,
    MessageService
  ]
})
export class AppModule {}
