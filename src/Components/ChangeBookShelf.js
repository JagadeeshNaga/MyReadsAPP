import React from "react";

class ChangeBookShelf extends React.Component {
  
    state = {
      shelf: this.props.shelf
    }
    
    onChangeValue= (event) => {
        this.setState({ shelf: event.target.value }, () => this.props.onUpdateShelf(this.props.book, this.state.shelf))
    }

    render() {  
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={(event) => {this.onChangeValue(event)}} >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ChangeBookShelf;
