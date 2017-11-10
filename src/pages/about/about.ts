import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuDetailPage } from '../menuDetail/menuDetail';
import { TrainingDetailPage } from '../trainingDetail/trainingDetail';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  test; // 変数を定義

  constructor(public navCtrl: NavController) {
    this.test = "Test text";  // 変数を初期化
  }

  goToMenuDetailPage() {
    this.navCtrl.push(MenuDetailPage);
  }

  goToTrainingDetailPage() {
    this.navCtrl.push(TrainingDetailPage);
  }

}
