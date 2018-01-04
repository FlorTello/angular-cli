import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './game/welcome/welcome.component';
import {GameComponent} from './game/game.component';
import {NewGameComponent} from './game/new-game/new-game.component';
import {AddTextComponent} from './game/add-text/add-text.component';
import {ResultGameComponent} from './game/result-game/result-game.component';
import {JoinGameComponent} from './game/join-game/join-game.component';

const routes: Routes = [
  {path: '', redirectTo: 'game/welcome', pathMatch: 'full'},
  {
    path: 'game', component: GameComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'join', component: JoinGameComponent},
      {path: 'new', component: NewGameComponent},
      {path: 'text', component: AddTextComponent},
      {path: 'result', component: ResultGameComponent}]
  },
  {path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
