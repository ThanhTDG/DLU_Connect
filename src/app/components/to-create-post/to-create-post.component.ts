import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-create-post',
  templateUrl: './to-create-post.component.html',
  styleUrls: ['./to-create-post.component.scss'],
})
export class ToCreatePostComponent implements OnInit {
  question: any;
  userAvatar: any;
  btnAddImage: any;
  constructor() { }

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/quotes
    this.question = "Bạn đang nghĩ gì?";
    // eslint-disable-next-line @typescript-eslint/quotes
    this.userAvatar = "../../../assets/icon/default/default-avatar.png";
    // eslint-disable-next-line @typescript-eslint/quotes
    this.btnAddImage = "../../../assets/icon/main/image.svg";
  }

}
