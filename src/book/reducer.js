import { LOAD_BOOK_SUCCESS } from './actions'

function currentBook(state = { authors: [], genres: [] }, action) {
  switch (action.type) {
    case LOAD_BOOK_SUCCESS:
      return Object.assign({}, state, action.book)
    default:
      return state
  }
}

export default currentBook
