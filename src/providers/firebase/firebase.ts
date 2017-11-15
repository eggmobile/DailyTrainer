import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  features;

  constructor(public afd: AngularFireDatabase) {

  }

  // 全Featureを取得する
  getFeaturesItems() {
    return this.afd.list('/features/').valueChanges();
  }

  // 特定Featureのみ取得する
  getSpecificFeature(featureId) {
    // if(!this.features){
    //   this.getFeaturesItems();
    // }
    // let featuresArray = this.features.subscribe(value => {console.log(value);});
    // console.log(featuresArray);
    let value;
    return this.afd.list('/features/', ref => ref.orderByChild('description').equalTo('@@@@')).valueChanges();
    // console.log(value);
    // return value;
    // return featuresArray[featureId];  
  }

  addItem(name) {
    this.afd.list('/features/').push(name);
  }

  removeItem(id) {
    this.afd.list('/features/').remove(id);
  }




}
