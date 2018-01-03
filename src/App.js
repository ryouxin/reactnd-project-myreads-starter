import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import * as booksApi from './BooksAPI';
import * as _controllers from './Controllers';
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
  componentDidMount(){

  }
  render() {
      // console.log(this.state._allBook);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
                    <List key={1} name='a'/>
                    // this.state.partList.map((part) => <list key={part.partTitle} listChange={this.listChangeHandle} info={{ title: part.partTitle, books: this.state[part.partTitle] }} />)
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
