import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrainingDetailPage } from '../trainingDetail/trainingDetail';
import { HomePage} from '../home/home';
import { AngularFireList } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-menu-detail',
  templateUrl: 'menuDetail.html'
})
export class MenuDetailPage {
featureTitle;
feature;
detailTitle;
public featureId;
featuresItems: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
   
    // this.featuresItems = this.firebaseProvider.getFeaturesItems();
    // this.feature = this.firebaseProvider.getSpecificFeature(0);
    // console.log(this.feature);
    let ctrl = this;
    this.firebaseProvider.getSpecificFeature(0).subscribe(res => {
      console.log(res); 
      ctrl.feature = res; 
      console.log(ctrl.feature);
      ctrl.featureTitle = res['feature_name'];
      console.log(ctrl.featureTitle);
    });

    this.detailTitle = [
      {itemName: "Bench press"},
      {itemName: "Butterfly"},
      {itemName: "Cable Crossover"},
      {itemName: "Crossover with Bands"},
      {itemName: "Dumbbell Flyes"}
    ];
    this.featureId = navParams.get("featureId");

  }
  goToTrainingDetailPage() {
    this.navCtrl.push(TrainingDetailPage, 
      {trainingId: "1"});
  }




  goToHomePage() {
    this.navCtrl.push(HomePage);
  }
}
