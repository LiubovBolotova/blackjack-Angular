/* tslint:disable */
import { HttpErrorResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './routs'
import { AppComponent } from './app.component';
import { SidebarComponent } from './game/sidebar/sidebar.component';
import { FieldComponentComponent } from './game/field-component/field-component.component';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [AppComponent, SidebarComponent, FieldComponentComponent, MenuComponent, GameComponent, PageNotFoundComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
