import { LOAD_BOOKS_SUCCESS } from './actions'

export default function books(state = [], action) {
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS:
      return action.books.slice()
    default:
      return state
  }
}
