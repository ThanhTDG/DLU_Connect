/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.page.html',
  styleUrls: ['./personal-detail.page.scss'],
})
export class PersonalDetailPage implements OnInit {
  imgAvatar: string;
  title: string;
  content: string;
  imgBackground: string;
  ngStyleOptionBarContainer: any;
  chossedOption: any;
  ngStyle1: any;
  ngStyle2: any;
  datas: string[] = ['Tất cả', 'Của bạn', 'Liên quan'];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
    this.ngStyleOptionBarContainer={
      "background-image": "url("+this.imgBackground+")"
    };
  }
  getData(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.title= this.router.getCurrentNavigation().extras.state.title;
        this.content = this.router.getCurrentNavigation().extras.state.content;
        this.imgAvatar = this.router.getCurrentNavigation().extras.state.imgAvatar;
        this.imgBackground = this.router.getCurrentNavigation().extras.state.imgBackground;
      }
    });
  }
  receiveChoseOptionEmitter($event: any){
    this.chossedOption = $event;
    this.displayChossedOption();
  }
  displayChossedOption(){
    for(let i=0; i<this.datas.length; i++){
      if(i===0 && this.chossedOption[i]==="1"){
        this.viewAllResult();
      }else if( i!==0 && this.chossedOption[i] === "1"){
        this.viewResult(i);
      }else if(i!==0 && this.chossedOption[i] === "0" && this.chossedOption[0] === "0"){
        this.unViewResult(i);
      }
    }
  }
  viewAllResult(){
    this.ngStyle1 = this.ngStyle2 ={
      display: "block"
    };
  }
  unViewResult(i){
    switch(i){
      case 1: this.ngStyle1 = {display: "none"}; break;
      case 2: this.ngStyle2 = {display: "none"}; break;
    }
  }
  viewResult(i){
    switch(i){
      case 1: this.ngStyle1 = {display: "block"}; break;
      case 2: this.ngStyle2 = {display: "block"}; break;
    }
  }

}
