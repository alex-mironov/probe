import React, { PropTypes } from 'react'
import PageHeader from '../shared/page-header'
import './BookHeader.less'
import NavLink from '../shared/nav-link'
import authorShape from '../shared/authorShape'

function getGenres(genres) {
  return (
    <ul>
      {genres.map(genre =>
        <li key={genre.id} className="Genre">
          <a
            href="/"
            className="btn btn-default Genre__link"
          >{genre.title}</a>
        </li>
      )}
    </ul>
  )
}

function getAuthors(authors) {
  return (
    <ul className="Authors">
      {authors.map(({ id, fullName }) =>
        <li className="Authors__item">
          <NavLink
            to={`/authors/${id}`}
            className="Authors__item-link"
          >
            {fullName}
          </NavLink>
        </li>
      )}
    </ul>
  )
}

const BookHeader = props => (
  <div>
    <PageHeader>
      <h1>{props.title}</h1>
      {getAuthors(props.authors)}
      {getGenres(props.genres)}
    </PageHeader>
  </div>
)

BookHeader.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.shape(authorShape)),
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  })),
}

export default BookHeader
