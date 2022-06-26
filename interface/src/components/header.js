import React from 'react';
import '../stylesheets/header.css'

function Header({ getCourses, getTitle }) {
  return (
    // <div className='header-container'>
    <nav className='navbar navbar-expand-sm container-fluid' id='header-container'>
      <h1 className='navbar-brand' id='header'> Find Online Courses </h1>
      <input className="form-control form-control-sm" id='bar' type="text" onChange={getTitle} placeholder='Search...' />
      <button className="btn btn-primary btn-sm" id='but' onClick={getCourses} type="button" >Search</button>
    </nav>
    // </div>
  );
}

export default Header