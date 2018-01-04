import React from 'react';
import Book from './book';

class List extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
	render(){
		return(
			<div className="bookshelf">
			  <h2 className="bookshelf-title">{this.props.info.title}</h2>
			  <div className="bookshelf-books">
				<ol className="books-grid">
				  {
					  	this.props.info.books.map((book)=><Book changeShelf={this.props.changeShelf} key={book.title} book={book}/>)
				  }
				</ol>
			  </div>
			</div>

		)
	}
}
export default List
