import React from 'react';
import '../stylesheets/search_bar.css'


function SearchBar({ getCourses, getTitle }) {
  return (
    <div className='search-container'>
      <input id='bar' class="form-control form-control-sm" type="text" onChange={getTitle} placeholder='Search...' />
      <button id='but' onClick={getCourses} type="button" class="btn btn-primary btn-sm" >Search</button>
    </div>
  );
}

export default SearchBar