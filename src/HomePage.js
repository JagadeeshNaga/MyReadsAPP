import React from 'react'
import Bookshelf from './Components/Bookshelf';
import Search from './Components/Search';


const HomePage = props => {

  const { books, onUpdateShelf } = props;
  const currentlyReadingBooks = books && (books.filter(book => book.shelf === 'currentlyReading'));
  const wantToReadBooks = books && (books.filter(book => book.shelf === 'wantToRead'));
  const haveReadBooks = books && (books.filter(book => book.shelf === 'read'));

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Currently Reading</h2>
          <Bookshelf books={currentlyReadingBooks} onUpdateShelf={onUpdateShelf}/>
        </div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Next Priority Reading list</h2>
          <Bookshelf books={wantToReadBooks} onUpdateShelf={onUpdateShelf}/>
        </div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Done Finished Reading</h2>
          <Bookshelf books={haveReadBooks} onUpdateShelf={onUpdateShelf}/>
        </div>
      </div>
      <Search />
    </div>
  )
}


export default HomePage;