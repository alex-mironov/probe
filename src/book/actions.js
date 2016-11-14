import booksJSON from '../books/books.json'

export const LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS'

function loadBookSuccess(book) {
  return {
    type: LOAD_BOOK_SUCCESS,
    book,
  }
}

function selectBoookById(id) {
  return booksJSON.find(book => book.id === id)
}

export function loadBook(id) {
  return dispatch =>
    // simulate AJAX request here
    // should be API call instead
    setTimeout(() => {
      const book = selectBoookById(id)
      dispatch(loadBookSuccess(book))
    }, 0)
    // TODO add fail handler
}
