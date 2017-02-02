import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFire } from 'angularfire2';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  finished=false;
  registerForm : FormGroup;
  constructor(private fb:FormBuilder, private af:AngularFire) {
  	this.registerForm=this.fb.group({
	  	contactInfo : this.fb.group({
	    	name : '',
	    	mobile : ''
	  	}),
	    address : this.fb.group({
	      country: '',
	      state: '',
	      district: '',
	      city: '',
	      zip: ''
	    }),
	    service : this.fb.group({
	      type: '',
	      area: ''
	    })
  	});
  }
  displayOnConsole(){
  	console.log(this.registerForm.value);
  }
  ngOnInit() {
  }

}
