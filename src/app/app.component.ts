import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from './store/models/app-state.model';
import { BookmarkItem } from './store/models/bookmark-item.model';
import { AddItemAction, DeleteItemAction } from './store/actions/bookmarks.actions';
import {GroupByPipe} from 'ngx-pipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GroupByPipe]
})
export class AppComponent implements OnInit {
  
  bookmarkItems: Observable<any>;
  newBookmarkItem: BookmarkItem = { id: '', name: '', url: '', group: '' };

  constructor(private store: Store<AppState>, private groupBy: GroupByPipe) { }

  ngOnInit() {
    this.bookmarkItems = this.store.select(store => {
      return this.groupBy.transform(store.bookmarks, 'group');
    });
  }

  addItem() {
  this.newBookmarkItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newBookmarkItem));

    this.newBookmarkItem = { id: '', name: '', url: '', group: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}