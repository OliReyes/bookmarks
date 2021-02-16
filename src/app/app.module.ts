import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BookmarkReducer } from './store/reducers/bookmark.reducer';

import {NgPipesModule} from 'ngx-pipes';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      bookmarks: BookmarkReducer
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }