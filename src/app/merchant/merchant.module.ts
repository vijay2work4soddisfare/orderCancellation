import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { MerchantComponent } from './merchant.component';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthMethods,AuthProviders,AngularFireModule } from 'angularfire2';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
const ROUTES: Routes = [
  { path: '', component: MerchantComponent }
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
    ReactiveFormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [RegistrationComponent,MerchantComponent],
  bootstrap: [MerchantComponent]
})
export class MerchantModule { }
