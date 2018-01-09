import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchBox from './lib/searchBox';
// import { Link } from 'react-router-dom';
// import * as booksApi from './BooksAPI'
import './index.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Index = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      // <Route path="/search" component={SearchBox} />

    </div>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('root'))
// console.log(booksApi.getAll());
