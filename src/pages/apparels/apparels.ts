import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApparelNamePage } from '../apparel-name/apparel-name';

@Component({
  selector: 'page-apparels',
  templateUrl: 'apparels.html'
})
export class ApparelsPage {

  constructor(public navCtrl: NavController) {
  }
  goToApparelName(params){
    if (!params) params = {};
    this.navCtrl.push(ApparelNamePage);
  }
}
