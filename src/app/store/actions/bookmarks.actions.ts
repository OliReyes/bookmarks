
import { Action } from '@ngrx/store';
import { BookmarkItem } from '../models/bookmark-item.model';

export enum BookmarkActionTypes {
  ADD_ITEM = '[Bookmark] Add Item',
  DELETE_ITEM = '[Bookmark] Delete Item'
}

export class AddItemAction implements Action {
  readonly type = BookmarkActionTypes.ADD_ITEM

  constructor(public payload: BookmarkItem) { }
}

export class DeleteItemAction implements Action {
  readonly type = BookmarkActionTypes.DELETE_ITEM

  constructor(public payload: string) { }
}

export type BookmarkAction = AddItemAction | DeleteItemAction
