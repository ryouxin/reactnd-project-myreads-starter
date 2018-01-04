import React from 'react';
import SearchBooks from './searchBooks';
import * as booksApi from '../BooksAPI';
import   {Link}  from 'react-router-dom';
class SearchBox extends React.Component {
    constructor() {
        super();
        this.state = {
			showBooks:false,
			searchBooks:[]
        }
		this.searchBook = this.searchBook.bind(this);
		this.getAllBook = this.getAllBook.bind(this);
        this.changeShelf = this.changeShelf.bind(this);
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
	getAllBook(){
		booksApi.getAll().then((books)=>{
			let CRBook=[];
			let WTRBook=[];
			let RBook=[];
			for (let _book of books) {
				switch (_book.shelf) {
					case 'currentlyReading':
						CRBook.push(_book);
						break;
					case 'wantToRead':
						WTRBook.push(_book);
						break;
					case 'read':
						RBook.push(_book);
						break;
					default:
				}
			};
			this.setState({currentlyReading:CRBook,wantToRead:WTRBook,read:RBook});
		})
	}
	changeShelf(a,b){
		booksApi.update(b,a).then((success)=>{
			// this.getAllBook();
			this.setState({flashPage:false});
		},(error)=>{
			console.log(error);
		});
	}
	render(){
		return(
			<div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
                <div className="search-books-input-wrapper">
                  {

                  }
                  <input id='searchBox' type="text" placeholder="Search by title or author" onChange={this.searchBook}/>

                </div>
              </div>
              <div className="search-books-results">


                  {this.state.showBooks?(
                      <SearchBooks changeShelf={this.changeShelf} books={this.state.searchBooks}/>
                  ):(
                      <p></p>
                  )}


              </div>
            </div>

		)
	}
}
export default SearchBox
