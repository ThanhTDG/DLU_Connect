import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot-get-start',
  templateUrl: './chatbot-get-start.page.html',
  styleUrls: ['./chatbot-get-start.page.scss'],
})
export class ChatbotGetStartPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  getStart(){
    this.router.navigateByUrl('chatbot-select-topic');
  }

}
