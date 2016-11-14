import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'
import Book from './book'
import Books from './books'
import Author from './author'
import Base from './base'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Base}>
        <IndexRoute component={Books} />
        <Route path="books/:id" component={Book} />
        <Route path="authors/:id" component={Author} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'))
