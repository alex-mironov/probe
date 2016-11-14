import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadBook } from './actions'
import bookShape from '../shared/bookShape'
import BookHeader from './BookHeader'

class Book extends Component {
  componentDidMount() {
    this.props.loadBook(this.props.routeParams.id)
  }

  render() {
    const { book } = this.props
    return (
      <div>
        <BookHeader
          title={book.title}
          authors={book.authors}
          genres={book.genres}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {book.preview}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.currentBook,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadBook: id => dispatch(loadBook(id)),
  }
}

Book.propTypes = {
  loadBook: PropTypes.func,
  book: PropTypes.shape(bookShape),
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)
