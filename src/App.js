import React from 'react';
import './App.css';
import * as booksApi from './BooksAPI';
import List from './lib/list';
import   {Link}  from 'react-router-dom';
import SearchBox from './lib/searchBox';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
window.changedBooks=[];
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
        flashPage: true,
        searchBooks:[],
        showBooks:false,
      }

      this.getAllBook = this.getAllBook.bind(this);
      this.changeShelf = this.changeShelf.bind(this);
      this.searchBook = this.searchBook.bind(this);
    }
    getAllBook(){
        booksApi.getAll().then((books)=>{
            let CRBook=[];
            let WTRBook=[];
            let RBook=[];
            for (let _book of books) {
                window.changedBooks.push(_book);
                switch (_book.shelf) {
                    case 'currentlyReading':
                        CRBook.push(_book);
                        // window.currentlyReading.push(_book);
                        break;
                    case 'wantToRead':
                        WTRBook.push(_book);
                        // window.wantToRead.push(_book);
                        break;
                    case 'read':
                        RBook.push(_book);
                        // window.read.push(_book);
                        break;
                    default:
                }
            };
    		this.setState({currentlyReading:CRBook,wantToRead:WTRBook,read:RBook});
        })
    }
    changeShelf(a,b){
        booksApi.update(b,a).then((success)=>{
            this.getAllBook();
            this.setState({flashPage:false});
        },(error)=>{
            console.log(error);
        });
    }
    searchBook(){
        let searchBookName;
        console.log(1);
        setTimeout(()=>{
            searchBookName=document.getElementById('searchBox').value;
            console.log(searchBookName);
            booksApi.search(searchBookName).then((book)=>{
                this.setState({showBooks:true , searchBooks:book});
            });
        },2000);
    }
  componentWillMount(){
      this.getAllBook();
  }
  render() {
      // console.log(typeof this.state.allList);
    return (

      <div className="app">
        {this.state.showSearchPage ? (

            <Route path="/search" render={() => (
                <SearchBox changedBooks={window.changedBooks} currentlyReading={this.state.currentlyReading} wantToRead={this.state.wantToRead} read={this.state.read} showBooks={this.state.showBooks} changeShelf={this.changeShelf} books={this.state.searchBooks} searchBook={this.searchBook}/>
            )}/>


        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                    this.state.allList.map((list) => <List flashPage={this.flashPage} changeShelf={this.changeShelf} key={list.listTitle}  info={{title:list.listTitle,books:this.state[list.listTitle]}}/>)
                }
              </div>
            </div>
            <div className="open-search">

              <Link to="/Search" onClick={() => this.setState({ showSearchPage: true })}>
              Add a book

              </Link>
            </div>
          </div>
        )}

      </div>

    )
  }
}

export default BooksApp
