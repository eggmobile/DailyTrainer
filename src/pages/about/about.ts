import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuDetailPage } from '../menuDetail/menuDetail';
import { TrainingDetailPage } from '../trainingDetail/trainingDetail';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  // 変数を定義
  test;
  itemArray;

  constructor(public navCtrl: NavController) {
    // 変数を初期化
    this.test = "Test text";
    this.itemArray = [
      {itemName: "Name 1"},
      {itemName: "Name 2"},
      {itemName: "Name 3"}
    ];
  }

  goToMenuDetailPage() {
    this.navCtrl.push(MenuDetailPage);
  }

  goToTrainingDetailPage() {
    this.navCtrl.push(TrainingDetailPage);
  }

}
