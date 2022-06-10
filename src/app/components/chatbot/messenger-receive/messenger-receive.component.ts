import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger-receive',
  templateUrl: './messenger-receive.component.html',
  styleUrls: ['./messenger-receive.component.scss'],
})
export class MessengerReceiveComponent implements OnInit {
  @Input() imgAvatar ='../../../../assets/icon/default/default-user-avatar.png';
  @Input() content='';
  @Input() time='';
  constructor() { }

  ngOnInit() {}

}
