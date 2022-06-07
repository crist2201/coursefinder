import React from 'react';
import '../stylesheets/search_bar.css'

function SearchBar() {
  return (
    <div className='search-container'>
      <input id='bar' type="text" placeholder='Search...' />
      <input id='but' type="button" value="Search" />
    </div>
  );
}

export default SearchBar