import React from 'react';
// import Select from './select';
import Book from './book';
class SearchBooks extends React.Component {
	constructor() {
        super();
        this.state = {
        }

    }
    render() {
		console.log(this.props.books);
		return(
			<ol className="books-grid">
			{
				  this.props.books.map((book)=><Book changeShelf={this.props.changeShelf} key={book.title} book={book}/>)
			}
			</ol>
		)
    }
}
export default SearchBooks
