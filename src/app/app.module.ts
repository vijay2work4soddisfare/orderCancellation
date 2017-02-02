import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'welcome', component: IntroComponent },
  { path: 'introduction',  loadChildren: 'app/welcome/welcome.module#WelcomeModule', data: { preload: true }},
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
    RouterModule.forRoot(ROUTES, {
      preloadingStrategy: PreloadAllModules
    }),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
