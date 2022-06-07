import React from 'react'
import Book from './Book';

const Bookshelf = props => {
   
    const books = props.books;
    const onUpdateShelf = props.onUpdateShelf;
    console.log(books);
    return (
        <div>
            <div className="bookshelf">
                <div className="bookshelf-books">
                    <div className="books-grid">
                        {books.map((book, index) => {
                            if (book.title) {
                                return (
                                    <div className='book' key={index}>
                                        <Book book={book} onUpdateShelf={onUpdateShelf} shelf={book.shelf}/>
                                    </div>
                                )
                            } else {
                                return <div>Empty shelf</div>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookshelf;