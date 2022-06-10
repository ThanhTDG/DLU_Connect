import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatbotSelectTopicPage } from './chatbot-select-topic.page';

const routes: Routes = [
  {
    path: '',
    component: ChatbotSelectTopicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatbotSelectTopicPageRoutingModule {}
