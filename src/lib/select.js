import React from 'react';

class Select extends React.Component {
	constructor() {
        super();
        this.state = {

        }
    }
    render() {

		let shelf ='';
		(this.props.book.shelf)? (shelf=this.props.book.shelf):(shelf='none');
		// console.log(shelf);
		const changeShelf = this.props.changeShelf;
		const book = this.props.book;
		return(
			<select value={shelf} onChange={e=>changeShelf(e.target.value,book)}>
		 	 <option value="none" disabled>Move to...</option>
		 	 <option value="currentlyReading">Currently Reading</option>
		 	 <option value="wantToRead">Want to Read</option>
		 	 <option value="read">Read</option>
		 	 <option value="none">None</option>
			</select>
		)
    }
}
export default Select
