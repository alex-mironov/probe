import React, { PropTypes } from 'react'
import NavLink from '../../shared/nav-link'
import bookShape from '../../shared/bookShape'
import './BookItem.less'

const BookItem = ({ book }) => {
  const { id, title } = book
  return (
    <li className="Book-item">
      <NavLink
        to={`/books/${id}`}
        className="Book-item__link"
      >{title}</NavLink>
    </li>
  )
}

BookItem.propTypes = {
  book: PropTypes.shape(bookShape),
}

export default BookItem
