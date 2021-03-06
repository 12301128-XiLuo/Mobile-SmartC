import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }    from '@angular/http';

import { SettingsPage } from '../pages/settings/settings';
import { DevicePage } from '../pages/device/device';
import { TabsPage } from '../pages/tabs/tabs';
import { DeviceDetailPage } from '../pages/device/device-detail/deviceDetail';
import { BuildClassModalPage } from '../pages/device/device-detail/modal/buildClassModal';
import { PushModal } from '../pages/device/device-detail/modal/pushModal';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//service
import { DeviceService } from './common/service/device.service';
import { BuildClassService } from './common/service/buildClass.service';
import { UserService } from './common/service/user.service';
import { StorageService } from './common/service/storage.service';
import { MessageService } from './common/service/message.service';
import { VideoService } from './common/service/video.service';
//pipe
import { BuildPipe } from './common/pipe/device.pipe';

import { Constant } from './common/constant/constant';
//import { usernameValidator } from './common/providers/validator';


@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    DevicePage,
    TabsPage,
    DeviceDetailPage,
    BuildClassModalPage,
    PushModal,
    LoginPage,
    BuildPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    SettingsPage,
    DevicePage,
    TabsPage,
    DeviceDetailPage,
    BuildClassModalPage,
    PushModal,
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
    MessageService,
    VideoService,
    Constant
  ]
})
export class AppModule {}
