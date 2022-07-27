import React from 'react';
import '../stylesheets/search_bar.css'


function SearchBar({ getTitle, clearData }) {
  return (
    <>
      <input className="form-control form-control-sm" id='bar' type="text" onChange={getTitle} placeholder='Search...' />
      <button className="btn btn-primary btn-sm" id='but' onClick={clearData} type="button" >Search</button>
    </>
  );
}

export default SearchBar