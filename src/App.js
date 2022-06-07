import React from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import HomePage from "./HomePage";
import BookSearch from "./Components/BookSearch";

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      searchBooks: []
    };
    this.shelfUpdate = this.shelfUpdate.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(b => {
      this.setState({
        books: b
      });
    });
  }

  async shelfUpdate(book, shelf) {
    let response = await BooksAPI.update(book, shelf);
    console.log(response);
    let allResponse = await BooksAPI.getAll().then(b => {
      console.log(b);
      this.setState({
        books: b
      });
      return b
    });
    console.log(allResponse);
  }

  bookSearch = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if(books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books })
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
    BooksAPI.getAll().then(b => {
      console.log(b);
      this.setState({
        books: b
      });
    });
  }

  resetSearch = () => {
    this.setState({
     searchBooks: []
    })
  }

  render() {
    const { books, searchBooks } = this.state;
    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <HomePage books={books} onUpdateShelf={this.shelfUpdate} />
            }
          />
          <Route
            path={"/search"}
            element={
              <BookSearch
                books={books}
                searchBooks={searchBooks}
                onSearch={this.bookSearch}
                onUpdateShelf={this.shelfUpdate}
                onResetSearch={this.resetSearch}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
