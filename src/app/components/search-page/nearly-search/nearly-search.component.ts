/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nearly-search',
  templateUrl: './nearly-search.component.html',
  styleUrls: ['./nearly-search.component.scss'],
})
export class NearlySearchComponent implements OnInit {
  @Input() inputTitle: string;
  @Input() inputContent: string;
  @Input() option: string;
  @Input() avatar: string;
  @Input() viewed: string;
  @Input() followed: string;
  @Input() color: string;
  ftitle: string;
  title: string;
  content: string;
  imgOption: string;
  more: string;
  imgAvatar: string;
  ngStyleContent: any;
  ngStyleImage: any;
  ngStyleFtitle: any;
  ngStyleAvatar: any;
  currentOptions: any;
  ngStyleNearlySearch: any;
  mainColors: string[]= ["var(--ion-color-app-green-dark)",
  "var(--ion-color-app-orange-dark)",
  "var(--ion-color-app-blue-dark)",
  "var(--ion-color-app-tea-dark)",];
  subColors: string[]=["var(--ion-color-app-green-light)",
  "var(--ion-color-app-orange-light)",
  "var(--ion-color-app-blue-light)",
  "var(--ion-color-app-tea-light)",];
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.ftitle = this.inputTitle.charAt(0);
    this.title = this.inputTitle;
    this.content = this.inputContent.length < 70? this.content=this.inputContent: this.content = this.inputContent.substring(0, 70);
    this.more ="... Xem thêm";

    if(this.option==="student"){
      this.isStudent();
    }
    if(this.option==="noResult"){
      this.isNotRecomend();
    }
    this.setOptions();
    this.randomColor();
  }
  setOptions(){
    if(this.viewed === "false" ){
      this.imgOption = "../../../../assets/icon/main/next.png";
      this.currentOptions=1;
    }else
    if(this.followed === "false"){
      this.imgOption = "../../../../assets/icon/main/follow.png";
      this.currentOptions=2;
    }else if(this.followed === "true"){
      this.imgOption = "../../../../assets/icon/main/followed.png";
      this.currentOptions=3;
    }else{
      this.imgOption = "../../../../assets/icon/main/close.png";
      this.currentOptions=0;
    }
  }
  randomColor(){
    switch(this.color){
      case "1":
        this.ngStyleContent = {"background-color": this.subColors[0]};
        if(this.option!=="student"){
          this.ngStyleAvatar = {"background-color": this.mainColors[0]};
        }
        break;
      case "2":
        this.ngStyleContent = {"background-color": this.subColors[1]};
        if(this.option!=="student"){
          this.ngStyleAvatar = {"background-color": this.mainColors[1]};
        }
        break;
      case "3":
        this.ngStyleContent = {"background-color": this.subColors[2]};
        if(this.option!=="student"){
          this.ngStyleAvatar = {"background-color": this.mainColors[2]};
        }
        break;
      case "4":
        this.ngStyleContent = {"background-color": this.subColors[3]};
        if(this.option!=="student"){
          this.ngStyleAvatar = {"background-color": this.mainColors[3]};
        }
        break;
    }
  }
  isStudent(){
    this.imgAvatar = this.avatar;
      this.ngStyleImage={
        display: "block",
      };
      this.ngStyleFtitle={
        display:"none"
      };
      this.ngStyleAvatar={
        "padding-top": "0px",
        "padding-left": "0px"
      };
      this.ngStyleContent = {
        "padding-top": "14px",
        "background-color": "var(--ion-color-app-green-lighter)"
      };
  }
  isNotRecomend(){
    this.viewed="false";
    this.isStudent();
    this.imgAvatar = "../../../../assets/icon/main/search.png";
    this.ngStyleImage={
      display: "block",
    };
    this.ngStyleFtitle={
      display:"none"
    };
    this.ngStyleAvatar={
      "padding-top": "8px",
      "padding-left": "8px"
    };
    this.ngStyleContent = {
      "border-radius":"24px",
      "padding-top": "14px",
      "background-color": "var(--ion-color-app-primary)"
    };
  }
  onOption(){
    switch(this.currentOptions){
      case 0:
        this.ngStyleNearlySearch={
          display: "none"
        };
        break;
      case 1:
        break;
      case 2:
        this.currentOptions =3;
        this.imgOption = "../../../../assets/icon/main/followed.png";
        break;
      case 3:
        this.currentOptions =2;
        this.imgOption = "../../../../assets/icon/main/follow.png";
        break;
    }
  }
  toViewDetail(){
    if(this.option === "student"){
      this.router.navigateByUrl('personal-other');
    }
  }
}
