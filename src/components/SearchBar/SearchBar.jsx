import { useState } from "react";
import searchIcon from "../../assets/icons/search-icon.svg";
import filterIcon from "../../assets/icons/filter-icon.svg";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <section className="search">
      <div className="search-bar">
        <img src={searchIcon} alt="search icon" className="search-bar__icon" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="search-bar__input"
        />
      </div>
      <img className="search-filter" src={filterIcon} alt="filter icon" />
    </section>
  );
};

export default SearchBar;
