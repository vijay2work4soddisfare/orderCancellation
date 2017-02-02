import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';
@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent{
  guest;
  user;
  constructor(public router: Router, public r: ActivatedRoute,private af:AngularFire) {
    this.guest=true;
    af.auth.subscribe(user=>{
      if(user!=null && user!=undefined) {
        this.guest=false;
        this.user=user.auth;
        this.af.database.object("")
      }else{
        this.guest=true;
        this.router.navigate(["../","introduction"],{relativeTo:this.r});
      }
    });
  }
}