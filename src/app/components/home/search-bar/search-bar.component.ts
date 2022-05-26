/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  hint: any;
  srcBtnSearch: any;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.hint = "Tìm kiếm bài viết...";
    this.srcBtnSearch = "../../../../assets/icon/main/search.png";
  }

  onClick(){
    this.navCtrl.navigateRoot('search-page');
  }

}
