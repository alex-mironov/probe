import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAuthor } from './actions'
import authorShape from '../shared/authorShape'
import BooksList from './books-list'
import Bio from './bio'

class Author extends Component {
  componentWillMount() {
    this.props.loadAuthor(this.props.routeParams.id)
  }

  render() {
    return (
      <div>
        <Bio
          author={this.props.author}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <BooksList
                items={this.props.author.books}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    author: state.currentAuthor,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadAuthor: id => dispatch(loadAuthor(id)),
  }
}

Author.propTypes = {
  loadAuthor: PropTypes.func,
  author: PropTypes.shape(authorShape),
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author)
