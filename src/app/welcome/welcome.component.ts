import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private af:AngularFire) {

  }
  ngOnInit() {
  }
  logout(){
    this.af.auth.logout();
  }
  login(){
    this.af.auth.login();
  }

}
