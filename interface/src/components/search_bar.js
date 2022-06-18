import React from 'react';
import '../stylesheets/search_bar.css'


function SearchBar({ getCourses, getTitle }) {
  return (
    <div className='search-container'>
      <input id='bar' type="text" onChange={getTitle} placeholder='Search...' />
      <input id='but' onClick={getCourses} type="button" value="Search" />
    </div>
  );
}

export default SearchBar