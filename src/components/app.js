import React, { Component } from 'react';

import BookList from '../containers/book-list.js';
import BookDetail from '../containers/book-detail.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> hello world</h1>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
