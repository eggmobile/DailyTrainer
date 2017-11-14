import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuDetailPage } from '../pages/menuDetail/menuDetail';
import { TrainingDetailPage } from '../pages/trainingDetail/trainingDetail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAiQ0OzM_rkgB-w4_qOB3TLft3zaHEcd_k",
  authDomain: "dailytrainer-60c50.firebaseapp.com",
  databaseURL: "https://dailytrainer-60c50.firebaseio.com",
  projectId: "dailytrainer-60c50",
  storageBucket: "dailytrainer-60c50.appspot.com",
  messagingSenderId: "779233572284"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuDetailPage,
    TrainingDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuDetailPage,
    TrainingDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
