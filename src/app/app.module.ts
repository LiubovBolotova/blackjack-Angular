/* tslint:disable */
import { HttpErrorResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './app.component/sidebar/sidebar.component';
import { FieldComponentComponent } from './app.component/field-component/field-component.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, FieldComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
