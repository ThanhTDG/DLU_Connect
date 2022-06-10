import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-chatbot-select-topic',
  templateUrl: './chatbot-select-topic.page.html',
  styleUrls: ['./chatbot-select-topic.page.scss'],
})
export class ChatbotSelectTopicPage implements OnInit {
  textGuide='Chọn chủ đề';
  saveTopics: Array<string>=[];
  topics: Array<string> = [];
  selectedTopics: Array<string> =[];
  ngStyleButton: any;
  haveSelected = this.selectedTopics.length!==0? true: false;
  topicsSelect = this.selectedTopics.length;
  constructor(private router: Router) { }

  ngOnInit() {
    this.topics.push('Topic Name 1');
    this.topics.push('Topic Name 2');
    this.topics.push('Topic Name 3');
    this.topics.push('Topic Name 4');
    this.topics.push('Topic Name 5');
    this.saveTopics = this.topics;
    this.checkToChat();
  }
  toStartChat(){
    if(this.haveSelected){
      const navigationExtras: NavigationExtras = { state: {topics: this.selectedTopics}};
      this.resetTopics();
      this.router.navigateByUrl('chatbot-chat', navigationExtras);
    }
  }
  resetTopics(){
    this.topics = this.saveTopics;
    this.selectedTopics=[];
    this.haveSelected = false;
    this.topicsSelect=0;
  }
  receiveSelectTopic($event){
    if($event !== null){
      const revString = $event.split('!1409!');
      if(revString[1]==='true'){
        this.selectedTopics.push(revString[0]);
      }else{
        this.unSelectTopic(revString[0]);
      }
      this.checkToChat();
    }
  }
  unSelectTopic(title: string){
    for(let i =0; i<this.selectedTopics.length; i++){
      if(this.selectedTopics[i] === title){
        this.selectedTopics.splice(i, 1);
        break;
      }
    }
  }
  checkToChat(){
    this.topicsSelect = this.selectedTopics.length;
    if(this.topicsSelect!==0){
      this.textGuide='Đã chọn: '+this.topicsSelect;
    }else{
      this.textGuide='Chọn chủ đề';
    }
    this.haveSelected = this.selectedTopics.length!==0? true: false;
    if(this.haveSelected){
      this.ngStyleButton={
        'background-color': 'var(--ion-color-app-green-darker)'
      };
    }else{
      this.ngStyleButton={
        'background-color': 'var(--ion-color-app-green-light)'
      };
    }
  }
  receiveSearchValue($event: any){
    console.log($event);
    if($event === '#1409!:null:'){
      this.topics= this.saveTopics;
    }else{
      this.topics = [];
      this.saveTopics.forEach(element => {
        console.log(element);
        if(element.toLocaleLowerCase().includes($event.toLocaleLowerCase())){
          this.topics.push(element);
        }
      });
    }
  }
}

