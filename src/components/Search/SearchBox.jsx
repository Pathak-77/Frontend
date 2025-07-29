import React from 'react';
import SvgSearchIcon from '../icon/SvgSearchIcon';

const SearchBox = ({ inputValue, handleInputChange, className = 'px-4 py-2 outline-none', placeholder = "Search", handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <button type="submit" ><SvgSearchIcon /></button>
    </form>
  );
};


export default SearchBox;
