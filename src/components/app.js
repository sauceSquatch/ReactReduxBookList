import React, { Component } from 'react';

import BookList from '../containers/book-list.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> hello world</h1>
        <BookList />
      </div>
    );
  }
}
