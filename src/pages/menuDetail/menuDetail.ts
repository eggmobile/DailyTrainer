import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrainingDetailPage } from '../trainingDetail/trainingDetail';

@Component({
  selector: 'page-menu-detail',
  templateUrl: 'menuDetail.html'
})
export class MenuDetailPage {
featureTitle;
  detailTitle;

  constructor(public navCtrl: NavController) {

    this.featureTitle = "Chest";
    this.detailTitle = [
      {itemName: "Bench press"},
      {itemName: "Butterfly"},
      {itemName: "Cable Crossover"},
      {itemName: "Crossover with Bands"},
      {itemName: "Dumbbell Flyes"}
    ];
  }
  goToTrainingDetailPage() {
    this.navCtrl.push(TrainingDetailPage);
  }

}
