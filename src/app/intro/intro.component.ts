import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(public router: Router, public r: ActivatedRoute) { }
  ok(){
  	this.router.navigate(['../', 'welcome'], {relativeTo: this.r});
  }
  ngOnInit() {
  }

}
