import React from 'react';

class Select extends React.Component {
	constructor() {
        super();
        this.state = {

        }
    }
    render() {
		console.log(this.props);
		return(
			<select>
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
