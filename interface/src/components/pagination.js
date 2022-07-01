import React from 'react';
import '../stylesheets/pagination.css'

function Pagination({ currentPage, nextPage, prevPage, totalPages, setPage }) {
  if (currentPage === 1) {
    return (
      <nav>
        <ul className="pagination justify-content-center">

          <li className="page-item active"><button className="page-link" >{currentPage}</button></li>
          <li className="page-item"><button className="page-link" >{currentPage + 1}</button></li>
          <li className="page-item"><button className="page-link" >{currentPage + 2}</button></li>


          <li className="page-item">
            <button className="page-link" onClick={nextPage} aria-label='Next'>
              <span aria-hidden="true">&gt;</span>
            </button>
          </li>

          <li className="page-item">
            <button className="page-link" aria-label='Next'>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>

        </ul>
      </nav>
    );
  }
  else if (currentPage === totalPages) {
    return (
      <nav >
        <ul className="pagination justify-content-center">

          < li className="page-item">
            <button className="page-link" aria-label='Previous'>
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <li className="page-item">
            <button className="page-link" onClick={prevPage} aria-label='Previous'>
              <span aria-hidden="true">&lt;</span>
            </button>
          </li>

          <li className="page-item"><button className="page-link" >{currentPage - 2}</button></li>

          <li className="page-item"><button className="page-link" >{currentPage - 1}</button></li>

          <li className="page-item active"><button className="page-link" >{currentPage}</button></li>

        </ul>
      </nav >
    );
  }
  else {
    return (
      <nav className='pagination-container'>
        <ul className="pagination justify-content-center">
          < li className="page-item">
            <button className="page-link" aria-label='Previous'>
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <li className="page-item">
            <button className="page-link" onClick={prevPage} aria-label='Previous'>
              <span aria-hidden="true">&lt;</span>
            </button>
          </li>

          <li className="page-item"><button className="page-link" >{currentPage - 1}</button></li>

          <li className="page-item active"><button className="page-link" >{currentPage}</button></li>

          <li className="page-item"><button className="page-link" >{currentPage + 1}</button></li>


          <li className="page-item">
            <button className="page-link" onClick={nextPage} aria-label='Next'>
              <span aria-hidden="true">&gt;</span>
            </button>
          </li>

          <li className="page-item">
            <button className="page-link" aria-label='Next'>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>

        </ul>
      </nav >
    );

  }
};

export default Pagination
