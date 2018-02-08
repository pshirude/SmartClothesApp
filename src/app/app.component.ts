import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ApparelsPage } from '../pages/apparels/apparels';
import { ApparelNamePage } from '../pages/apparel-name/apparel-name';
import { FavouritesPage } from '../pages/favourites/favourites';
import { StatsPage } from '../pages/stats/stats';
import { SettingsPage } from '../pages/settings/settings';
import { NotificationsPage } from '../pages/notifications/notifications';


import { ScanAddPage } from '../pages/scan-add/scan-add';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ScanAddPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToScanAdd(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ScanAddPage);
  }goToApparels(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ApparelsPage);
  }goToApparelName(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ApparelNamePage);
  }goToFavourites(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FavouritesPage);
  }goToStats(params){
    if (!params) params = {};
    this.navCtrl.setRoot(StatsPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }goToNotifications(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NotificationsPage);
  }
}
