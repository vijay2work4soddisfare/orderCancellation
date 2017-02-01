import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'introduction', component: IntroComponent },
  { path: 'welcome',  loadChildren: 'app/welcome/welcome.module#WelcomeModule'},
  { path: 'merchant',  loadChildren: 'app/merchant/merchant.module#MerchantModule'},
  { path: 'customer',  loadChildren: 'app/customer/customer.module#CustomerModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
