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
export class HeaderPageComponent implements OnInit {
  @Input() pageTitle = 'Page Name';
  @Input() canBack = false;
  ngStyleBtnBack: any;
  ngStyleTitle: any;

  previousUrl=null;
  constructor(private router: Router, private navCtrl: NavController) {
    if(this.canBack===true){
      this.previousUrl = this.getPathToBack();
      this.ngStyleBtnBack={
        display: "block"
      };
      this.ngStyleTitle ={
        "padding-left": "60px"
      };
    }
  }
  ngOnInit() {
  }
  getPathToBack() {
    let currentUrl = this.router.url;
    let previousUrl = null;

    this.router.events
      .pipe(
        filter((event: any) => event instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        previousUrl = events[0].urlAfterRedirects;
        currentUrl = events[1].urlAfterRedirects;
      });
    return previousUrl;
  }
  toBack() {
    if(this.previousUrl!==null){
      this.router.navigateByUrl(this.previousUrl);
    }else{
      this.ngStyleBtnBack={
        display: "none"
      };
      this.ngStyleTitle ={
        "padding-left": "12px"
      };
    }
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
