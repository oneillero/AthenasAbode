import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    clearBooks: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!/\S/.test(this.state.text)) {
      this.props.setAlert("Please enter an author, subject, or title", "danger");
    } else {
      this.props.searchBooks(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { clearBooks, books } = this.props;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Explore Athena's Abode of Books here"
            style={{
              marginBottom: 0,
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              outline: "1px solid #070a4c",
            }}
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>

        <div className="form-text">
          You can search by author, subject, or title
        </div>
        {books && books.length > 0 && (
          <button
            onClick={clearBooks}
            className="btn btn-block btn-danger"
            style={{ marginTop: "2rem" }}
          >
            Clear search results
          </button>
        )}
      </>
    );
  }
}

export default Search;
