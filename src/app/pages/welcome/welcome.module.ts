import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { MsgWelcomeComponent } from '../../components/msg-welcome/msg-welcome.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    MsgWelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
