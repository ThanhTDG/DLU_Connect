import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-bar',
  templateUrl: './members-bar.component.html',
  styleUrls: ['./members-bar.component.scss'],
})
export class MembersBarComponent implements OnInit {
  images: Array<string>=[];
  imgMore='../../../../assets/icon/group/members-more.png';
  constructor() { }

  ngOnInit() {
    this.initImages();
  }
  initImages(){
    this.images.push('../../../../assets/icon/default/default-user-avatar.png');
    this.images.push('../../../../assets/icon/default/default-user-avatar.png');
    this.images.push('../../../../assets/icon/default/default-user-avatar.png');
    this.images.push('../../../../assets/icon/default/default-user-avatar.png');
    this.images.push('../../../../assets/icon/default/default-user-avatar.png');
  }
}
