import React from 'react';
let CRBook = [];
let WTRBook = [];
let RBook = [];


export const checkBooks = (response) => {
    response.then(function(books) {
        for (let _book of books) {
            switch (_book.shelf) {
                case 'currentlyReading':
                    CRBook.push(makeBookList(_book));
                    break;
                case 'wantToRead':
                    WTRBook.push(makeBookList(_book));
                    break;
                case 'read':
                    RBook.push(makeBookList(_book));
                    break;
                default:
            }
        };
		let _allBook = [CRBook,WTRBook,RBook];
		console.log(CRBook);
		return CRBook;
    })
}

export const makeBookList = (_book) => {
   return (<li>
	 <div className="book">
	   <div className="book-top">
		 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
		 <div className="book-shelf-changer">
		   <select>
			 <option value="none" disabled>Move to...</option>
			 <option value="currentlyReading">Currently Reading</option>
			 <option value="wantToRead">Want to Read</option>
			 <option value="read">Read</option>
			 <option value="none">None</option>
		   </select>
		 </div>
	   </div>
	   <div className="book-title">To Kill a Mockingbird</div>
	   <div className="book-authors">Harper Lee</div>
	 </div>
   </li>);
}
