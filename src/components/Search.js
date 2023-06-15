import React, { Component } from "react";
import { BiSearch } from "react-icons/bi";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.inputRef = React.createRef(); // Create a ref for the input field
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSearchClick = () => {
    this.inputRef.current.focus(); // Focus the input field when the search icon is clicked
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { input } = this.state;

    return (
      <form className="navbar-search">
        <div className="search-bar">
          <div className="search-icon" onClick={this.handleSearchClick}>
            <BiSearch />
          </div>

          <input
            ref={this.inputRef} // Attach the ref to the input field
            value={input}
            type="text"
            className="search-input"
            placeholder="Tìm kiếm theo: Tên nhà Cung cấp, Tên Sản Phẩm Cung Cấp..."
            onChange={this.handleInputChange}
          />

          <button
            className="btn search-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Tìm
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
