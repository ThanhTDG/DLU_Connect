/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.scss'],
})
export class FullPostComponent implements OnInit {
  userAvatar: any;
  userName: any;
  time: any;
  textTitle: any;
  textContent: any;
  image: any;
  otRemove: any;
  otMore: any;
  numLike: any;
  numComment: any;
  numshare: any;

  ctLike: any;
  ctlbLike: any;
  ctComment: any;
  ctlbComment: any;
  ctShare: any;
  ctlbShare: any;
  constructor() { }

  ngOnInit() {
    this.userAvatar = "../../../assets/icon/default/default-user-avatar.png";
    this.userName = "Người dùng";
    this.time = "1 giờ trước";
    this.textTitle = "Lorem ipsum dolor sit amet";
    // eslint-disable-next-line max-len
    this.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.Lorem ipsum dolor sit amet, consectetur";
    this.image = "../../../assets/icon/default/default-post-bd-image.png";

    this.otRemove = "../../../assets/icon/main/close.png";
    this.otMore = "../../../assets/icon/main/more.png";

    this.numLike="999";
    this.numComment="999";
    this.numshare="999";

    this.ctLike = "../../../assets/icon/post/like.png";
    this.ctComment = "../../../assets/icon/post/comment.png";
    this.ctShare = "../../../assets/icon/post/share.png";

    this.ctlbLike="Thích";
    this.ctlbComment = "Bình luận";
    this.ctlbShare = "Chia sẻ";
  }

}
