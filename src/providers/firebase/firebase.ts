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

  constructor(public afd: AngularFireDatabase) {
  }

  // 全Featureを配列で取得する
  getFeaturesItems() {
    // list()メソッドを利用することで、Featureオブジェクトを配列として取得できる。
    return this.afd.list('/features/').valueChanges();
  }

  // 特定Featureのみオブジェクトとして取得する
  getSpecificFeature(featureId) {
    let pathForQuery = '/features/' + featureId;
    // 配列の時はlist()メソッドを使うが、オブジェクトを取得したい場合はobject()メソッドを使用する。
    return this.afd.object(pathForQuery).valueChanges();
  }


}
