import authorsJSON from './authors.json'

export const LOAD_AUTHOR_SUCCESS = 'LOAD_AUTHOR_SUCCESS'

function loadAuthorSuccess(author) {
  return {
    type: LOAD_AUTHOR_SUCCESS,
    author,
  }
}

function selectAuthorById(id) {
  return authorsJSON.find(author => author.id === id)
}

export function loadAuthor(id) {
  return dispatch =>
    // simulate AJAX request here
    // should be API call instead
    setTimeout(() => {
      const author = selectAuthorById(id)
      dispatch(loadAuthorSuccess(author))
    }, 0)
    // TODO add fail handler
}
