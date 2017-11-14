import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuDetailPage } from '../menuDetail/menuDetail';
import { TrainingDetailPage } from '../trainingDetail/trainingDetail';
import { AngularFireList } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  // 変数を定義
  test;
  itemArray;
  featuresItems: Observable<any[]>;

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    // 変数を初期化
    this.test = "Test text";
    this.itemArray = [
      {itemName: "Name 1", itemColor: "red"},
      {itemName: "Name 2", itemColor: "blue"},
      {itemName: "Name 3", itemColor: "black"}
    ];
    
    this.featuresItems = this.firebaseProvider.getFeaturesItems();
    // Ovservableのログ出力
    console.log(this.featuresItems.subscribe(value => {console.log(value)}));
  }

  goToMenuDetailPage() {
    this.navCtrl.push(MenuDetailPage);
  }

  goToTrainingDetailPage() {
    this.navCtrl.push(TrainingDetailPage);
  }

}
