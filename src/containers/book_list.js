import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
        return (
          <li
            key={book.title}
            onClick = {() => this.props.selectBook(book)}
            className="list-group-item">{book.title}
          </li>
        );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props
  //inside of BookList
  return {
    books: state.books
  };
}

//Anything returned will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectbook is called result should be passed
  //to all reducers
  return bindActionCreators({selectBook}, dispatch)
}

//Take this component and take this mapStateToProps
//And connect the two by the container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
