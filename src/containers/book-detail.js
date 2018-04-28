import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render () {
        if (!this.props.book) {
            return (<div>Select a book to see it's details</div>);
        }
        return (
        <div>
            <h3>Details For:</h3>
            <div>Title: {this.props.book.title}</div>
            <div>Pages: {this.props.book.pages}</div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return { book: state.activeBook }; // remember activeBook is the global key we set up in reducers/index.js
}

export default connect(mapStateToProps)(BookDetail);
