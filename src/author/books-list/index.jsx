import React, { PropTypes } from 'react'
import bookShape from '../../shared/bookShape'
import './BooksList.less'
import BookItem from './BookItem'

const BooksList = props => (
  <ul className="Books-list">
    {props.items.map(book =>
      <BookItem
        key={book.id}
        book={book}
      />
    )}
  </ul>
)

BooksList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(bookShape)
  ),
}

export default BooksList
