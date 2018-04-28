import React, { Component } from 'react';// No {} pulls entire object, {} grabs that property
import { connect } from 'react-redux'; // connect is a function
import { selectBook } from '../actions/index'; // Our action creator
import { bindActionCreators } from 'redux'; // a function to send action through all reducers

class BookList extends Component { // we got rid of export default
    renderList() { // plug in our application state into this.props.books
        return this.props.books.map(book => {
            return ( // remember to use a unique value for the listItem key
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

function mapStateToProps(state) { // if the state ever changes this container will re-render the new list
    // What will be returned from here will show up as props in Booklist
    return { // whatever is contained in this object is going to be set equal to this.props of our component
        books: state.books // this will always be assigned to this.props on the component
    };
}

// Anything returned from this function will end up as props on the BookList Container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers using dispatch
    return bindActionCreators({ selectBook: selectBook }, dispatch); // the value selectBook is the import from the top
}

// Promote BookList from a component to a container, it needs to know about this new dispatch method selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
