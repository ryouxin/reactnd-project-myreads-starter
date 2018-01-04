import React from 'react';
import SearchBooks from './searchBooks';
import * as booksApi from '../BooksAPI';
class SearchBox extends React.Component {
    constructor() {
        super();
        this.state = {
			showBooks:false,
			searchBooks:[]
        }
		this.searchBook = this.searchBook.bind(this);
    }
	searchBook(){
        let searchBookName;
		console.log(0);
        setTimeout(()=>{
            searchBookName=document.getElementById('searchBox').value;
            booksApi.search(searchBookName).then((book)=>{
                this.setState({showBooks:true , searchBooks:book});
            });
        },2000);
    }
	render(){
		return(
			<div className="search-books">
              <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                  {

                  }
                  <input id='searchBox' type="text" placeholder="Search by title or author" onChange={this.searchBook}/>

                </div>
              </div>
              <div className="search-books-results">


                  {this.state.showBooks?(
                      <SearchBooks changeShelf={this.props.changeShelf} books={this.state.searchBooks}/>
                  ):(
                      <p></p>
                  )}


              </div>
            </div>

		)
	}
}
export default SearchBox
