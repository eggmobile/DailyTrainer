import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuDetailPage } from '../menuDetail/menuDetail';
import { TrainingDetailPage } from '../trainingDetail/trainingDetail';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goToMenuDetailPage() {
    this.navCtrl.push(MenuDetailPage);
  }

  goToTrainingDetailPage() {
    this.navCtrl.push(TrainingDetailPage);
  }

}
