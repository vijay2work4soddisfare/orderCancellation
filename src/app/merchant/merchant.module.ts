import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const ROUTES: Routes = [
  { path: '', component: RegistrationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule
  ],
  declarations: [RegistrationComponent],
  bootstrap: [RegistrationComponent]
})
export class MerchantModule { }
