/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  hint: any;
  srcBtnSearch: any;
  constructor() { }

  ngOnInit() {
    this.hint = "Tìm kiếm bài viết...";
    this.srcBtnSearch = "../../../../assets/icon/main/search.png";
  }

}
