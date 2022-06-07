import React from "react";
import ChangeBookShelf from "./ChangeBookShelf";


const Book = props => {
    const shelf = props.shelf;
    const book = props.book;
    const onUpdateShelf = props.onUpdateShelf;
    let imageLinks = book.imageLinks && book.imageLinks.thumbnail;
    const styleBook ={width: 128, height: 193,  backgroundImage: `url(${imageLinks})`}
    return (
        <div>
            <div className='book'>
                <div className="book-top">
                  <ChangeBookShelf shelf={shelf} onUpdateShelf={onUpdateShelf} book={book}/>
                    <div className='book-cover' style={styleBook} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
        </div>
    )
}


export default Book;