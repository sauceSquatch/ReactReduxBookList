import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
// note 'export default ' is removed from class component for containers
// now, the bottom react-redux export of the connection between the state and the component
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// the redux part
function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside BookList
  return {
    books: state.books
  };
}


export default connect(mapStateToProps)(BookList);
