import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbotGetStartPageRoutingModule } from './chatbot-get-start-routing.module';

import { ChatbotGetStartPage } from './chatbot-get-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbotGetStartPageRoutingModule
  ],
  declarations: [ChatbotGetStartPage]
})
export class ChatbotGetStartPageModule {}
