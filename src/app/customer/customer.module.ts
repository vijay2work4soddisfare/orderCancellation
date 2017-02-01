import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes} from '@angular/router';
const ROUTES: Routes = [
  { path: '', component: RegistrationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [RegistrationComponent],
  bootstrap: [RegistrationComponent]
})
export class CustomerModule { }
