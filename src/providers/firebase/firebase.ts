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
  
   constructor(public afd: AngularFireDatabase) { }
  
   getFeaturesItems() {
     return this.afd.list('features').valueChanges();
   }
  
   addItem(name) {
     this.afd.list('/features/').push(name);
   }
  
   removeItem(id) {
     this.afd.list('/features/').remove(id);
   }
 }
