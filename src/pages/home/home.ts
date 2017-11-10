import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isHome; // 変数定義
  featureArray;
  trainedTimes;


  constructor(public navCtrl: NavController) {
    this.isHome = "test";
    this.featureArray = [
      {featureTitle: "Arm", featureImg: "", trainedTimes: 1},
      {featureTitle: "Chest", featureImg: "", trainedTimes: 2},
      {featureTitle: "Abs", featureImg: "", trainedTimes: 3},
      {featureTitle: "Leg", featureImg: "", trainedTimes: 4}
    ];
  }

}
