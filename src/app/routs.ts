/* tslint:disable */

import { Routes} from '@angular/router';
import { MenuComponent } from './app-component/menu/menu.component';
import { GameComponent } from './app-component/game/game.component';
import { PageNotFoundComponent } from './app.component/page-not-found/page-not-found.component';


export const routes: Routes = [
  { path: "game", component: GameComponent },
  { path: "menu", component: MenuComponent },
  { path: "", component: MenuComponent},
  { path: "**", component: PageNotFoundComponent}
];