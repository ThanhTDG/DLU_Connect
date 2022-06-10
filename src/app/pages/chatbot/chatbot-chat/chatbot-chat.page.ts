/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chatbot-chat',
  templateUrl: './chatbot-chat.page.html',
  styleUrls: ['./chatbot-chat.page.scss'],
})
export class ChatbotChatPage implements OnInit {
  imgBack='../../../../assets/icon/chat-bot/back.png';
  pageName='Chat bot';
  ipChat='';
  imgSend='../../../../assets/icon/post/comment/button/trans-2.png';
  messengerRevceives: Array<string>= [];
  messengerSenders: Array<string>= [];
  selectedTopics: Array<string>=[];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.messengerRevceives.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur');
    this.messengerSenders.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur');
    this.getExtras();
  }
  getMessenger(){
    this.updateSendButton();
  }
  updateSendButton(){
    if(this.ipChat!==''){
      this.imgSend='../../../../assets/icon/post/comment/button/trans-3.png';
    }else{
      this.imgSend='../../../../assets/icon/post/comment/button/trans-2.png';
    }
  }
  sendMessenger(){
    if(this.ipChat!==''){
      this.messengerSenders.push(this.ipChat);
      this.ipChat='';
    }
    this.updateSendButton();
  }
  onCloseTopic($event: string){
    for(let i=0; i<this.selectedTopics.length; i++){
      if($event === this.selectedTopics[i]){
        this.selectedTopics.splice(i, 1);
        break;
      }
    }
  }
  getExtras() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
          this.selectedTopics = this.router.getCurrentNavigation().extras.state.topics;
      }
    });
  }
  onBack(){
    this.router.navigateByUrl('chatbot-select-topic');
  }

}
