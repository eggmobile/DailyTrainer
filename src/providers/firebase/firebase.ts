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
    let pathForQuery = '/features/' + featureId;
    console.log(pathForQuery);
    return this.afd.list(pathForQuery).valueChanges(); 
  }

  addItem(name) {
    this.afd.list('/features/').push(name);
  }

  removeItem(id) {
    this.afd.list('/features/').remove(id);
  }




}
