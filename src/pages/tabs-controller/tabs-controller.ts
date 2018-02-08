import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApparelNamePage } from '../apparel-name/apparel-name';
import { StatsPage } from '../stats/stats';
import { ScanAddPage } from '../scan-add/scan-add';
import { ApparelsPage } from '../apparels/apparels';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ScanAddPage;
  tab2Root: any = ApparelsPage;
  tab3Root: any = StatsPage;
  constructor(public navCtrl: NavController) {
  }
  goToApparels(params){
    if (!params) params = {};
    this.navCtrl.push(ApparelsPage);
  }goToApparelName(params){
    if (!params) params = {};
    this.navCtrl.push(ApparelNamePage);
  }goToStats(params){
    if (!params) params = {};
    this.navCtrl.push(StatsPage);
  }
}
