import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { BallSelectorComponent } from '../../components/ball-selector/ball-selector.component';
import { BetSlipComponent } from '../../components/bet-slip/bet-slip.component';
import { ResultComponent } from '../../components/result/result.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GameComponent,
    BallSelectorComponent,
    BetSlipComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule
  ]
})
export class GameModule { }
