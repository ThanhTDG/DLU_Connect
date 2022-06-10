import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  @Input() imgAvatar= '../../../../assets/icon/chat-bot/imgAvatar.png';
  @Input() title='Topic name';
  @Input() content='Description for topic';
  imgOption='../../../../assets/icon/chat-bot/topic-selected.png';

  ngStyleContainer: any;
  ngStyleOption: any;
  ngStyleAvatar: any;

  isSelected = false;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() selectEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}
  onSelect(){
    if(this.isSelected===false){
      this.ngStyleOption={
        display: 'block'
      };
      this.ngStyleContainer={
        border: '2px solid var(--ion-color-app-green-darker)',
        'background-color': 'var(--ion-color-app-green-light)'
      };
      this.ngStyleAvatar={
        border: '4px solid var(--ion-color-app-green-dark)'
      };
      this.isSelected = true;
      this.selectEmitter.emit(this.title+'!1409!'+this.isSelected);
    }else{
      this.ngStyleOption={
        display: 'none'
      };
      this.ngStyleContainer={
      };
      this.ngStyleAvatar={};
      this.isSelected = false;
      this.selectEmitter.emit(this.title+'!1409!'+this.isSelected);
    }
  }
}
