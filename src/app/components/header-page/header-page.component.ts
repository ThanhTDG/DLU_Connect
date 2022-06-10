/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router, RoutesRecognized } from '@angular/router';
import { NavController } from '@ionic/angular';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent implements OnInit{
  @Input() pageTitle = 'Page Name';
  @Input() canBack = 'false';
  @Input() canSearch = 'true';
  @Input() noneBackGround='false';
  ngStyleBtnBack: any;
  ngStyleTitle: any;
  ngStyleSearch: any;
  ngStyleContainer: any;

  prvHeaderUrl: string;
  constructor(private router: Router, private navCtrl: NavController) {
  }
  ngOnInit() {
    if(this.canBack==='true'){
      this.ngStyleBtnBack={
        display: "block"
      };
      this.ngStyleTitle ={
        "padding-left": "60px"
      };
    }
    if(this.canSearch==='true'){
      this.ngStyleSearch={
        display:'block'
      };
    }else{
      this.ngStyleSearch={
        display: 'none'
      };
    }
    if(this.noneBackGround ==='true'){
      this.ngStyleContainer={
        '--background-color': 'transparent',
        '--ion-color-base': 'transparent !important'
      };
    }
  }
  // getPathToBack() {
  //   let currentUrl = this.router.url;
  //   this.router.events
  //     .pipe(
  //       filter((event: any) => event instanceof RoutesRecognized),
  //       pairwise()
  //     )
  //     .subscribe((events: RoutesRecognized[]) => {
  //       this.prvHeaderUrl = events[0].urlAfterRedirects;
  //       currentUrl = events[1].urlAfterRedirects;
  //       console.log(events);
  //     });
  // }
  toBack() {
    // if(this.prvHeaderUrl!==null){
    //   this.router.navigateByUrl(this.prvHeaderUrl);
    // }else{
    //   this.ngStyleBtnBack={
    //     display: "none"
    //   };
    //   this.ngStyleTitle ={
    //     "padding-left": "12px"
    //   };
    // }
    this.navCtrl.back();
  }
  toSearch(){
    let curUrl ="";
    if(this.router.url.includes('?')){
      curUrl = this.router.url.slice(0, this.router.url.indexOf('?'));
    }else{
      curUrl = this.router.url;
    }
    const navigationExtras: NavigationExtras = { state: {prvUrl: curUrl}};
    console.log(navigationExtras);
    this.navCtrl.navigateRoot('search-page', navigationExtras);
  }
}
