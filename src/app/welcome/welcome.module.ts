import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes} from '@angular/router';
const ROUTES: Routes = [
  { path: '', component: SignUpComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [SignUpComponent],
  bootstrap: [SignUpComponent]
})
export class WelcomeModule { }
