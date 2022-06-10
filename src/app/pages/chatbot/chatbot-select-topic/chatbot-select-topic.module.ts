import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbotSelectTopicPageRoutingModule } from './chatbot-select-topic-routing.module';

import { ChatbotSelectTopicPage } from './chatbot-select-topic.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbotSelectTopicPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChatbotSelectTopicPage]
})
export class ChatbotSelectTopicPageModule {}
