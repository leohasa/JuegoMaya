import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryGameComponent } from './components/memory-game/memory-game.component';
import { LevelSelectorComponent } from './components/level-selector/level-selector.component';
import { InfoGameSelectorComponent } from './components/info-game-selector/info-game-selector.component';
import { GameButtonsComponent } from './components/game-buttons/game-buttons.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryGameComponent,
    LevelSelectorComponent,
    InfoGameSelectorComponent,
    GameButtonsComponent,
    GameInfoComponent,
    GameGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
