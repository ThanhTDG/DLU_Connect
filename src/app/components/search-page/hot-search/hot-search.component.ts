/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-search',
  templateUrl: './hot-search.component.html',
  styleUrls: ['./hot-search.component.scss'],
})
export class HotSearchComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() inputTitle: string;
  @Input() inputContent: string;
  ftitle: string;
  title: string;
  content: string;
  imgRemove: string;
  more: string;
  ngStyleHotSearch: any;
  constructor() {
  }

  ngOnInit() {
    this.ftitle = this.inputTitle.charAt(0);
    this.title = this.inputTitle;
    this.content = this.inputContent.length < 70? this.content=this.inputContent: this.content = this.inputContent.substring(0, 70);
    this.imgRemove = "../../../../assets/icon/main/close.png";
    this.more ="... Xem thêm";
  }

  onOption(){
    this.ngStyleHotSearch={
      display: "none"
    };
  }

}
