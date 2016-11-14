import { LOAD_AUTHOR_SUCCESS } from './actions'

function currentAuthor(state = { books: [] }, action) {
  switch (action.type) {
    case LOAD_AUTHOR_SUCCESS:
      return Object.assign({}, state, action.author)
    default:
      return state
  }
}

export default currentAuthor
