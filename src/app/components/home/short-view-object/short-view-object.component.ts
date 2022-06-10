/* eslint-disable @typescript-eslint/quotes */
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-short-view-object',
  templateUrl: './short-view-object.component.html',
  styleUrls: ['./short-view-object.component.scss'],
})
export class ShortViewObjectComponent implements OnInit, AfterViewInit{
  @Input() color: string;
  @Input() imgAvatar: string;
  @Input() option: string;
  title: string;
  fTitle: string;
  ngStyleContainer: any;
  ngStyleTitle: any;
  ngStyleContentTitle: any;
  ngStyleAvatar: any;
  mainColors: string[]= ["var(--ion-color-app-green-dark)",
  "var(--ion-color-app-orange-dark)",
  "var(--ion-color-app-blue-dark)",
  "var(--ion-color-app-tea-dark)",];
  subColors: string[]=["var(--ion-color-app-green-light)",
  "var(--ion-color-app-orange-light)",
  "var(--ion-color-app-blue-light)",
  "var(--ion-color-app-tea-light)",];
  constructor(private router: Router) { }
  ngAfterViewInit(){
  }

  ngOnInit() {
    this.title='CNTT';
    this.setColor();
    try{
      this.fTitle = this.title.charAt(0);
    }catch(ex){
    }
    if(this.option==="student"){
      this.ngStyleAvatar={
        display: "block"
      };
      this.ngStyleContentTitle={
        display: "none"
      };
      this.ngStyleTitle={
        padding: "0px"
      };
    }
  }
  setColor(){
    switch(this.color){
      case "1":
        this.ngStyleContainer = {"background-color": this.subColors[0]};
        this.ngStyleTitle = {"background-color": this.mainColors[0]};
        break;
      case "2":
        this.ngStyleContainer = {"background-color": this.subColors[1]};
        this.ngStyleTitle = {"background-color": this.mainColors[1]};
        break;
      case "3":
        this.ngStyleContainer = {"background-color": this.subColors[2]};
        this.ngStyleTitle = {"background-color": this.mainColors[2]};
        break;
      case "4":
        this.ngStyleContainer = {"background-color": this.subColors[3]};
        this.ngStyleTitle = {"background-color": this.mainColors[3]};
        break;
    }
  }
  toViewDetails(){
    let curUrl ="";
    if(this.router.url.includes('?')){
      curUrl = this.router.url.slice(0, this.router.url.indexOf('?'));
    }else{
      curUrl = this.router.url;
    }
    const navigationExtras: NavigationExtras = { state: {prvUrl: curUrl}};
    this.router.navigateByUrl("department", navigationExtras);
  }

}
