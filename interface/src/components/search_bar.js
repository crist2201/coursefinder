import React, { useCallback } from 'react';
import App from '../App';
import '../stylesheets/search_bar.css'


function SearchBar({ getCourses }) {
  return (
    <div className='search-container'>
      <input id='bar' type="text" placeholder='Search...' />
      <input id='but' onClick={getCourses} type="button" value="Search" />
    </div>
  );
}

export default SearchBar