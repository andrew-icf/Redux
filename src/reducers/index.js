import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
// Mapping of our state, the key is the piece of state the value is the reducer
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
