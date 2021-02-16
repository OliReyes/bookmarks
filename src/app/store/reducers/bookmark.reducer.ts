import { BookmarkActionTypes, BookmarkAction } from '../actions/bookmarks.actions';
import { BookmarkItem } from '../models/bookmark-item.model';


const initialState: Array<BookmarkItem> = [
  {
    id: "1775935f-36fd-467e-a667-09f95b917f6d",
    name: 'New York Times',
    url: 'https://www.nytimes.com/',
    group: 'Newspapers'
  },
  {
    id: "f6406249-17b3-4b83-9170-d4f66b9f3310",
    name: 'Youtube',
    url: 'https://www.youtube.com/',
    group: 'Entertainment'
  },
  {
    id: "f6406249-19b3-4b83-9170-d4f66b9f3310",
    name: 'Al Jazeera',
    url: 'https://www.aljazeera.com/',
    group: 'Newspapers'
  },
  {
    id: "t7832148-19b3-4b83-9170-d4f76b0f3310",
    name: 'El País',
    url: 'https://elpais.com/',
    group: 'Newspapers'
  },
  {
    id: "f6406269-18b3-4e83-9170-d4f66b9f3310",
    name: 'Netflix',
    url: 'https://www.netflix.com/',
    group: 'Entertainment'
  }
];

export function BookmarkReducer(state: Array<BookmarkItem> = initialState, action: BookmarkAction) {
  switch (action.type) {
    case BookmarkActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case BookmarkActionTypes.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}