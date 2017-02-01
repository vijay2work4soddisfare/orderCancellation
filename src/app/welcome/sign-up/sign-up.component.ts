import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public router: Router, public r: ActivatedRoute) {

  }
  loginM(){
    this.router.navigate(['../','merchant'],{relativeTo:this.r});
  }
  loginC(){
    this.router.navigate(['../','customer'],{relativeTo:this.r});
  }
  ngOnInit() {
  }

}
