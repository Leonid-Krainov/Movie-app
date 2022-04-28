import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviecardComponent } from './MovieCard/moviecard.component';
import { MovietableComponent } from './MovieTable/movietable.compoent';
import { votesTransformPipe } from "./Pipes/votesTransformPipe";
import {FormComponent} from "./Form/form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MoviecardComponent,
    MovietableComponent,
    votesTransformPipe,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
