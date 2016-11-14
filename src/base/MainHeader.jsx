import React from 'react'
import NavLink from '../shared/nav-link'
import './MainHeader.less'

const MainHeader = () => (
  <header className="Main-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="Main-header__title">
            <NavLink
              to="/"
              className="Main-header__link"
            >Books App</NavLink>
          </h1>
        </div>
      </div>
    </div>
  </header>
)

export default MainHeader
