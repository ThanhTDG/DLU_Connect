/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/quotes */
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit, AfterViewInit {
  datas: string[] = ["Tất cả", "Khoa", "Sinh Viên", "Bài viết"];
  imgHotSearch: string;
  avatar: string;
  searchValue: string;
  ngStyleBounder: any;
  ngStyleSearchResult: any;
  toViewSearchValue: string;
  noResultsearch: string;
  ngStyleViewResults: any;
  chossedOption: any;

  ngStyle1: any;
  ngStyle2: any;
  ngStyle3: any;
  constructor(private cdr: ChangeDetectorRef) { }
  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.imgHotSearch = "../../../../assets/icon/search-page/hot-search.png";
    this.avatar = "../../../../assets/icon/default/default-avatar.png";
    this.onScreenRecomed();
  }
  receiveSearchValue($event: string){
    this.searchValue = $event;
    if(this.searchValue==="#1409!:null:"){
      this.onScreenRecomed();
    }else{
      this.onScreenSearch();
    }
  }
  onScreenRecomed(){
    this.ngStyleBounder={
      display: "block"
    };
    this.ngStyleSearchResult = {
      display: "none"
    };
    this.ngStyleViewResults = {
      display: "none"
    };
  }
  onScreenSearch(){
    this.toViewSearchValue = this.searchValue.length < 10? this.searchValue: this.searchValue.substring(0,10)+" ...";
    this.noResultsearch = this.searchValue.length < 20? this.searchValue: this.searchValue.substring(0,20)+" ...";
    this.ngStyleBounder={
      display: "none"
    };
    this.ngStyleSearchResult = {
      display: "block"
    };
    this.ngStyleViewResults = {
      display: "none"
    };
  }
  onViewSearchResult(){
    this.ngStyleBounder={
      display: "none"
    };
    this.ngStyleSearchResult = {
      display: "none"
    };
    this.ngStyleViewResults = {
      display: "block"
    };
    this.viewAllResult();
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
    this.ngStyle1 = this.ngStyle2 = this.ngStyle3={
      display: "block"
    };
  }
  unViewResult(i){
    switch(i){
      case 1: this.ngStyle1 = {display: "none"}; break;
      case 2: this.ngStyle2 = {display: "none"}; break;
      case 3: this.ngStyle3 = {display: "none"}; break;
    }
  }
  viewResult(i){
    switch(i){
      case 1: this.ngStyle1 = {display: "block"}; break;
      case 2: this.ngStyle2 = {display: "block"}; break;
      case 3: this.ngStyle3 = {display: "block"}; break;
    }
  }
  randomNumber(){
    return Math.floor(Math.random() * (4 - 1 + 1) + 1);
  }
}
