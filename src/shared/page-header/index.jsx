import React, { PropTypes } from 'react'
import './PageHeader.less'

const PageHeader = props => (
  <header className="Page-header">
    <div className="container">
      <div className="row">
        {props.children}
      </div>
    </div>
  </header>
)

PageHeader.propTypes = {
  children: PropTypes.node,
}

export default PageHeader
