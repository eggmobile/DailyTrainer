import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-training-detail',
  templateUrl: 'trainingDetail.html'
})
export class TrainingDetailPage {
featureTitle = "leg"; //部位名
detailTitle = "course 1" ; //詳細コース名
instructionImg; 
instructionYouTube;
description;
trainingId;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

this.trainingId = navParams.get("trainingId");
console.log(this.trainingId);

  }

}
