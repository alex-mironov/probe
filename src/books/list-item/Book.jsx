import React, { PropTypes } from 'react'
import NavLink from '../../shared/nav-link'
import './Book.less'
import Author from './Author'

const Book = ({ id, title, authors }) => (
  <li className="col-md-3 col-sm-6 col-xs-12">
    <div className="Book-card">
      <div className="Book-card__image" />
      <div className="Book-card__info">
        <h3 className="Book-card__title">
          <NavLink
            to={`/books/${id}`}
          >{title}</NavLink>
        </h3>
        <ul className="Book-card__authors">
          {authors.map(author =>
            <Author
              key={author.id}
              id={author.id}
              fullName={author.fullName}
            />
          )}
        </ul>
      </div>
    </div>
  </li>
)

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    fullName: PropTypes.string,
  })),
}

export default Book
