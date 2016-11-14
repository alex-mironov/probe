import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './NavLink.less'

const NavLink = (props) => {
  const { className = '' } = props
  return (
    <Link
      {...props}
      className={`Nav-link ${className}`}
    >
      {props.children}
    </Link>
  )
}

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default NavLink
