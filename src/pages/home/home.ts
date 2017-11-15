import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuDetailPage } from '../menuDetail/menuDetail';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isHome; // 変数定義
  featureArray;
  trainedTimes;
  featuresName: Observable<any[]>;

  constructor(public navCtrl: NavController, public afd: AngularFireDatabase, public firebaseProvider: FirebaseProvider) {
    this.isHome = "test";
    this.featureArray = [
      {featureTitle: "Arm", featureImg: "", trainedTimes: 1},
      {featureTitle: "Chest", featureImg: "", trainedTimes: 2},
      {featureTitle: "Abs", featureImg: "", trainedTimes: 3},
      {featureTitle: "Leg", featureImg: "", trainedTimes: 4}
    ];

    this.featuresName = this.firebaseProvider.getFeaturesItems();
  }

  getFeaturesName() {
    return this.afd.list('features').valueChanges();
  }

  goToMenuDetailPage() {
    this.navCtrl.push(MenuDetailPage,{
      featureId: "0"
    });
  }


}
