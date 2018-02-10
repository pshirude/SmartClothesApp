import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ScanAddPage } from '../pages/scan-add/scan-add';
import { ApparelsPage } from '../pages/apparels/apparels';
import { FavouritesPage } from '../pages/favourites/favourites';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { StatsPage } from '../pages/stats/stats';
import { SettingsPage } from '../pages/settings/settings';
import { ApparelNamePage } from '../pages/apparel-name/apparel-name';
import { StatsApparelNamePage } from '../pages/stats-apparel-name/stats-apparel-name';
import { NotificationsPage } from '../pages/notifications/notifications';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyServiceService } from '../services/my-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { ChartsModule  } from 'ng2-charts';


@NgModule({
  declarations: [
    MyApp,
    ScanAddPage,
    ApparelsPage,
    FavouritesPage,
    TabsControllerPage,
    StatsPage,
    SettingsPage,
    ApparelNamePage,
    StatsApparelNamePage,
    NotificationsPage
  ],
  imports: [
    BrowserModule,HttpClientModule,ChartsModule,
    IonicModule.forRoot(MyApp),
	NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScanAddPage,
    ApparelsPage,
    FavouritesPage,
    TabsControllerPage,
    StatsPage,
    SettingsPage,
    ApparelNamePage,
    StatsApparelNamePage,
    NotificationsPage
  ],
  providers: [
    StatusBar,BarcodeScanner,MyServiceService, HttpClientModule,ChartsModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
	
  ]
})
export class AppModule {}