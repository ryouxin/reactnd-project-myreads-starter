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
			  <h2 className="bookshelf-title">Currently Reading</h2>
			  <div className="bookshelf-books">
				<ol className="books-grid">
				  {
					  	<Book name='1'/>
				  }
				</ol>
			  </div>
			</div>

		)
	}
}
export default List
