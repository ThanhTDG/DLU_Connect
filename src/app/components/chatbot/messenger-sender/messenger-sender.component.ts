import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger-sender',
  templateUrl: './messenger-sender.component.html',
  styleUrls: ['./messenger-sender.component.scss'],
})
export class MessengerSenderComponent implements OnInit {
  @Input() content='';
  @Input() time='';
  @Input() status=null;
  imgStatus='';
  constructor() { }

  ngOnInit() {
    if(this.status==='true'){
      this.imgStatus='../../../../assets/icon/chat-bot/have-send.png';
    }else if(this.status === 'false'){
      this.imgStatus='../../../../assets/icon/chat-bot/reload.png';
    }else if(this.status === null){
      this.imgStatus='';
    }
  }

}
