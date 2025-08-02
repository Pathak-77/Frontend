import React from "react";
import SearchIcon from "../icon/SearchIcon";

const SearchBar = ({
  inputValue,
  handleInputChange,
  className = " focus:outline-none h-[2rem] rounded-full  px-1 caret-gray-200",
  placeholder = " Find your dream..",
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBar;
