import { combineReducers } from 'redux'
import books from './books/reducer'
import currentAuthor from './author/reducer'
import currentBook from './book/reducer'

export default combineReducers({
  books,
  currentAuthor,
  currentBook,
})
