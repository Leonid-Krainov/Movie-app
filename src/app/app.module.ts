import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviecardComponent } from './MovieCard/moviecard.component';
import { MovietableComponent } from './MovieTable/movietable.compoent';
import {votesTransformPipe} from "./Pipes/votesTransformPipe";

@NgModule({
  declarations: [
    AppComponent,
    MoviecardComponent,
    MovietableComponent,
    votesTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
