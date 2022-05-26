import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  groupName: any;
  srcBtnSearch: any;
  ngStyleSearch: any;
  srcBtnMore: any;
  srcImgCover: any;

  constructor() { }

  ngOnInit() {
    this.groupName = "CTK43";
    this.srcBtnSearch = "../../../assets/icon/main/search.png";
    this.ngStyleSearch = {
      width: '40px' ,
      height: '40px' ,
      'background-color' : 'var(--ion-color-app-green-dark)' ,
      'border-radius' : '20px' ,
      'display' : 'flex' ,
      'justify-items' : 'center' ,
      padding: '8px' ,
    };
    this.srcBtnMore = "../../../assets/icon/main/more.png";
    this.srcImgCover = "../../../assets/img/group-cover.png";
  }

}
