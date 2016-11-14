import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
// note 'export default ' is removed from class component for containers
// now, the bottom react-redux export of the connection between the state and the component
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
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

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all the reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote bookList from compnent to containers - it news to know about this new dispatch method, selectBook. 
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
