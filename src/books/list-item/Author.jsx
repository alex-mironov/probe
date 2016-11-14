import React from 'react'
import NavLink from '../../shared/nav-link'
import authorShape from '../../shared/authorShape'

const Author = ({ fullName, id }) => (
  <li className="Author">
    <NavLink to={`/authors/${id}`}>{fullName}</NavLink>
  </li>
)

Author.propTypes = authorShape

export default Author
