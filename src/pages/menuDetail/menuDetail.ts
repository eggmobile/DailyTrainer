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
detailTitle;
trainingTitleArray=[];
public featureId;
public traingsId;
public trainingArray;
featuresItems: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
   
    // FeatureのIDからFeatureのオブジェクトを取得
    this.firebaseProvider.getSpecificFeature(0).subscribe(res => {
      // console.log(res);
      this.trainingArray = res['training_array'][0];
      console.log(this.trainingArray);
      this.featureTitle = res['feature_name'];
   

    for(let n=0; n<this.trainingArray.length; n++){
    this.firebaseProvider.getSpecificTraings(n).subscribe(res => {
     this.trainingTitleArray[n] = res['training_name'];
     console.log(this.trainingTitleArray);
     })};
    }); 

    // this.detailTitle = [
    //   {itemName: "Bench press"},
    //   {itemName: "Butterfly"},
    //   {itemName: "Cable Crossover"},
    //   {itemName: "Crossover with Bands"},
    //   {itemName: "Dumbbell Flyes"}
    // ];
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
