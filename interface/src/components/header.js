import React from 'react';
import '../stylesheets/header.css'
import SearchBar from './search_bar';

function Header({ getCourses, getTitle, clearData }) {
  return (
    <nav className='navbar navbar-expand-sm container-fluid' id='header-container'>
      <h1 className='navbar-brand' id='header'> Find Online Courses </h1>
      <SearchBar getCourses={getCourses} getTitle={getTitle} clearData={clearData} />
    </nav>
  );
}

export default Header