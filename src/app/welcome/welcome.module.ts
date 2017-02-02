import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome.component';
import { RouterModule, Routes} from '@angular/router';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { AuthMethods,AuthProviders,AngularFireModule } from 'angularfire2';
import { EducateComponent } from './educate/educate.component';
const ROUTES: Routes = [
  { path: '', component: WelcomeComponent }
];
const firebaseConfig = {
    apiKey: "AIzaSyC7e3k3s-54GhArBhds2nZqtV2ojSponHs",
    authDomain: "daily-milk-and-news.firebaseapp.com",
    databaseURL: "https://daily-milk-and-news.firebaseio.com",
    storageBucket: "daily-milk-and-news.appspot.com",
    messagingSenderId: "319358028779"
  };
const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    MaterialModule.forRoot()
  ],
  declarations: [SignUpComponent,WelcomeComponent, EducateComponent],
  bootstrap: [WelcomeComponent]
})
export class WelcomeModule { }
