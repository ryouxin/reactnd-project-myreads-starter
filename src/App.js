import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import * as booksApi from './BooksAPI';
// import * as _controllers from './Controllers';
import List from './lib/list';




class BooksApp extends React.Component {

    constructor() {
      super();
      this.state = {
        allList: [
          { listTitle: 'currentlyReading' },
          { listTitle: 'wantToRead' },
          { listTitle: 'read' }
        ],
        currentlyReading: [],
        wantToRead: [],
        read: [],
        bookIsLoading: true
      }

      // this.updateBookStatus = this.updateBookStatus.bind(this);
      // this.getBookList = this.getBookList.bind(this);
      // this.refreshBookList = this.refreshBookList.bind(this);
      // this.listChangeHandle = this.listChangeHandle.bind(this);
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
  componentDidMount(){
      this.getAllBook();
  }
  render() {

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {
                }
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                    this.state.allList.map((list) => <List key={list.listTitle} info={{title:list.listTitle,books:this.state[list.listTitle]}}/>)
                }
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
