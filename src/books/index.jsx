import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadBooks } from './actions'
import bookShape from '../shared/bookShape'
import './Books.less'
import Book from './list-item/Book'

class Books extends Component {
  componentDidMount() {
    this.props.loadBooks()
  }

  render() {
    return (
      <div className="container">
        <ul className="Books row">
          {this.props.books.map(book =>
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              authors={book.authors}
            />
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadBooks: () => dispatch(loadBooks()),
  }
}

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape(bookShape)
  ),
  loadBooks: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books)
