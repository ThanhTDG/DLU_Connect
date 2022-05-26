/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() title: any;
  @Input() time: any;
  @Input() content: any;
  @Input() imgAvatar: any;
  @Input() imgContents: any;//"../../../../assets/icon/default/default-post-bd-image.png";
  images: Array<string>=[];
  replyValue: any;
  replyImages: any;
  ngStyleReplies: any;

  replies: Array<string>=["This is reply 01", "This is reply 02", "This is reply 03"];
  constructor() {
  }

  ngOnInit() {
    this.ngStyleReplies={
      display: "none"
    };
    try{
      this.images = [];
      this.imgContents = this.imgContents.split('!1409!');
      this.imgContents.forEach(element => {
        this.images.push(element);
      });
    }catch(ex){}
  }
  receiveReplyValue($event: string){
    this.replyImages="";
    this.replyValue = $event;
    if(this.replyValue.length > 1){
      const repValue = this.replyValue.split('!1409@#');
      this.replies.push(repValue[0].substring(1, repValue[0].length));
      if(repValue[1]!==""){
        this.replyImages = repValue[1];
      }
    }
    if(this.replyValue.charAt(0)==="1"){
      this.ngStyleReplies={
        display: "block"
      };
    }
  }

}
