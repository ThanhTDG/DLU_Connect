/* eslint-disable @typescript-eslint/member-ordering */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inchat-topic',
  templateUrl: './inchat-topic.component.html',
  styleUrls: ['./inchat-topic.component.scss'],
})
export class InchatTopicComponent implements OnInit {
  @Input() imgAvatar='../../../../assets/icon/chat-bot/imgAvatar.png';
  @Input() title='Topic title';
  @Input() content='Quản trị viên';
  imgOption='../../../../assets/icon/main/close.png';
  ngStyleMain: any;
  @Output() closeEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}
  onClose(){
    this.ngStyleMain={
      display: 'none'
    };
    this.closeEmitter.emit(this.title);
  }
}
