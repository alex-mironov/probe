import booksJSON from './books.json'

export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS'

function loadBooksSuccess(books) {
  return {
    type: LOAD_BOOKS_SUCCESS,
    books,
  }
}

export function loadBooks() {
  return dispatch =>
    // simulate AJAX request here
    setTimeout(() => dispatch(loadBooksSuccess(booksJSON)), 0)
    // TODO add fail handler
}
