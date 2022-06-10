import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatbotGetStartPage } from './chatbot-get-start.page';

const routes: Routes = [
  {
    path: '',
    component: ChatbotGetStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatbotGetStartPageRoutingModule {}
