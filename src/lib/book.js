import React from 'react';
import Select from './select'
class Book extends React.Component {
	constructor() {
        super();
        this.state = {

        }
    }
    render() {

		// console.log(this.props);
		const title = this.props.book.title;
		const authors = this.props.book.authors;
		const url = this.props.book.imageLinks.smallThumbnail;
		return(
			<li>
		 	 <div className="book">
		 	   <div className="book-top">
		 		 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${url}")` }}></div>
		 		 <div className="book-shelf-changer">
		 			<Select key={title}  book={this.props.book} changeShelf={this.props.changeShelf} />
		 		 </div>
		 	   </div>
		 	   <div className="book-title">{title}</div>
		 	   <div className="book-authors">{authors}</div>
		 	 </div>
		    </li>
		)
    }
}
export default Book
