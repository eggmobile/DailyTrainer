import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrainingDetailPage } from '../trainingDetail/trainingDetail';
import { HomePage} from '../home/home';

@Component({
  selector: 'page-menu-detail',
  templateUrl: 'menuDetail.html'
})
export class MenuDetailPage {
featureTitle;
detailTitle;
public featureId;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.featureTitle = "Chest";
    this.detailTitle = [
      {itemName: "Bench press"},
      {itemName: "Butterfly"},
      {itemName: "Cable Crossover"},
      {itemName: "Crossover with Bands"},
      {itemName: "Dumbbell Flyes"}
    ];
    this.featureId = navParams.get("featureId");
    console.log(this.featureId);

  }
  goToTrainingDetailPage() {
    this.navCtrl.push(TrainingDetailPage, 
      {trainingId: "1"});
  }




  goToHomePage() {
    this.navCtrl.push(HomePage);
  }
}
