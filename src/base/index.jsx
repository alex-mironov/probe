import React, { PropTypes } from 'react'
import './Base.less'
import MainHeader from './MainHeader'

const Base = props => (
  <div>
    <MainHeader />
    <div className="Main-container">
      {props.children}
    </div>
  </div>
)

Base.propTypes = {
  children: PropTypes.node,
}

export default Base
