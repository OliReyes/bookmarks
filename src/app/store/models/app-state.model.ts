import { BookmarkItem } from './bookmark-item.model';

export interface AppState {
  readonly bookmarks: Array<BookmarkItem>
}