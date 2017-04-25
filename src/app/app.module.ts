import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Login } from '../pages/login/login';

import { AngularFireModule } from "angularfire2";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
    apiKey: "AIzaSyClpRvatVfnFXVeczttHDRC6-uujRU-JaE",
    authDomain: "albion-d5644.firebaseapp.com",
    databaseURL: "https://albion-d5644.firebaseio.com",
    projectId: "albion-d5644",
    storageBucket: "albion-d5644.appspot.com",
    messagingSenderId: "45855280155"
};


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
