import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatbotChatPage } from './chatbot-chat.page';

const routes: Routes = [
  {
    path: '',
    component: ChatbotChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatbotChatPageRoutingModule {}
