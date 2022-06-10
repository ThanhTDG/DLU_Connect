/* eslint-disable @typescript-eslint/quotes */
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-personal-other-detail',
  templateUrl: './personal-other-detail.page.html',
  styleUrls: ['./personal-other-detail.page.scss'],
})
export class PersonalOtherDetailPage implements OnInit {
  pageName='Xem bài viết';
  imgAvatar='';
  title='User';
  content='';
  imgBackground='';

  ngStyleOptionBarContainer: any;

  datas: string[] = ['Tất cả', this.title, 'Liên quan'];

  chossedOption= '0';
  ngStyle1: any;
  ngStyle2: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.setData();
    this.ngStyleOptionBarContainer={
      "background-image": "url("+this.imgBackground+")"
    };
  }
  ngOnInit() {
    this.setData();
    this.ngStyleOptionBarContainer={
      "background-image": "url("+this.imgBackground+")"
    };
  }
  receiveChoseOptionEmitter($event){
    this.chossedOption = $event;
    this.displayChossedOption();
  }
  setData(){
    this.imgAvatar = '../../../assets/icon/default/default-avatar.png';
    this.imgBackground = '../../../assets/icon/personal/default-bg.png';
    this.title = 'Sinh Viên';
    this.content = 'Chi đoàn CTK43';
  }
  // getData(){
  //   //error
  //   this.route.queryParams.subscribe(params => {
  //     if (this.router.getCurrentNavigation().extras.state) {
  //       this.title= this.router.getCurrentNavigation().extras.state.title;
  //       this.content = this.router.getCurrentNavigation().extras.state.content;
  //       this.imgAvatar = this.router.getCurrentNavigation().extras.state.imgAvatar;
  //       this.imgBackground = this.router.getCurrentNavigation().extras.state.imgBackground;
  //       console.log(`title: ${this.title}, content: ${this.content}, avatar: ${this.imgAvatar}, bg: ${this.imgBackground}`);
  //     }
  //   });
  // }
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
