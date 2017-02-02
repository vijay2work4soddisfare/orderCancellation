import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  guest;
  constructor(public router: Router, public r: ActivatedRoute,private af:AngularFire) {
    this.guest=true;
    af.auth.subscribe(user=>{
      if(user!=null && user!=undefined) {
        this.guest=false;
      }else{
        this.guest=true;
      }
    });
  }
  loginM(){
    if(this.guest) {
      this.af.auth.login().then(result=>{
        //console.log(result);
        if(result!=undefined && result!=null) {
          this.router.navigate(['../','merchant'],{relativeTo:this.r});
        }
      });
    }else{
       this.router.navigate(['../','merchant'],{relativeTo:this.r});
    }
  }
  loginC(){
    if(this.guest) {
      this.af.auth.login().then(result=>{
        //console.log(result);
        if(result.uid!=undefined && result.uid!=null) {
          this.router.navigate(['../','customer'],{relativeTo:this.r});
        }
      });
    }else{
      this.router.navigate(['../','customer'],{relativeTo:this.r});
    }
  }
  ngOnInit() {
  }

}
