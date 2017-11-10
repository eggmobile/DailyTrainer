import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {

  }

}
