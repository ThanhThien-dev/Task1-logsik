import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function Search() {
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="navbar-search">
      <div className="search-bar">
        <div className="search-icon">
          <BiSearch />
        </div>

        <input
          value={input}
          type="text"
          className="search-input"
          placeholder="Tìm kiếm theo: Tên nhà Cung cấp, Tên Sản Phẩm Cung Cấp..."
          onChange={(e) => handleInputChange(e)}
        />

        <button
          className="btn search-button"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Tìm
        </button>
      </div>
    </form>
  );
}

export default Search;
