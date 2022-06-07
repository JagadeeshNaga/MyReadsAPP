import React from 'react'
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <div className="open-search">
            <Link to='/search'>
                <button>Search For Books</button>
            </Link>
        </div>
    )
}

export default Search;