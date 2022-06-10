import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbotChatPageRoutingModule } from './chatbot-chat-routing.module';

import { ChatbotChatPage } from './chatbot-chat.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbotChatPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChatbotChatPage]
})
export class ChatbotChatPageModule {}
