import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss'],
})
export class FollowButtonComponent implements OnInit {
  btnFollowStatus='Theo dõi';
  ngStyleBtnFollow: any;
  followed = false;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() followEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}
  follow(){
    if(this.followed===true){
      this.toFollow();
    }else{
      this.toUnFollow();
    }
  }
  toFollow(){
    this.ngStyleBtnFollow={
      'background-color': 'var(--ion-color-app-orange-dark)'
    };
    this.btnFollowStatus='Theo dõi';
    this.followed=false;
    this.followEmitter.emit('unfollow');
  }
  toUnFollow(){
    this.ngStyleBtnFollow={
      'background-color': 'var(--ion-color-app-green-dark)'
    };
    this.btnFollowStatus='Đã theo dõi';
    this.followed=true;
    this.followEmitter.emit('follow');
  }
}
