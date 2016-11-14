import React, { PropTypes } from 'react'
import './Bio.less'
import authorShape from '../../shared/authorShape'
import PageHeader from '../../shared/page-header'

const Bio = ({ author }) => (
  <PageHeader>
    <div className="col-md-4 col-md-offset-4">
      <img
        src="..."
        alt="Author"
        className="img-thumbnail Bio__img"
      />
      <h1>{author.fullName}</h1>
    </div>
    <p className="col-md-6 col-md-offset-3">{author.bio}</p>
  </PageHeader>
)

Bio.propTypes = {
  author: PropTypes.shape(authorShape),
}

export default Bio
