import React from 'react';
import '../stylesheets/pagination.css'

function Pagination({ currentPage, nextPage, prevPage, totalPages, setPage }) {

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {(currentPage === 1 && currentPage < totalPages) ?
          <>
            <li className="page-item active"><button className="page-link" onClick={() => { setPage(currentPage) }}>{currentPage}</button></li>
            <li className="page-item"><button className="page-link" onClick={() => { setPage(currentPage) }}>{currentPage + 1}</button></li>
            <li className="page-item"><button className="page-link" onClick={() => { setPage(currentPage) }}>{currentPage + 2}</button></li>
          </> :
          <>
            < li className="page-item">
              <button className="page-link" aria-label='Next' onClick={() => setPage(1)}>
                <span aria-hidden="true">First Page</span>
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={prevPage} aria-label='Previous'>
                <span aria-hidden="true">&lt;</span>
              </button>
            </li>
          </>
        }

        {(currentPage > 1 && currentPage < totalPages) &&
          <>
            <li className="page-item"><button className="page-link" onClick={() => { setPage(currentPage) }}>{currentPage - 1}</button></li>
            <li className="page-item active"><button className="page-link" onClick={() => { setPage(currentPage) }}>{currentPage}</button></li>
            <li className="page-item"><button className="page-link" onClick={() => { setPage(currentPage) }}>{currentPage + 1}</button></li>
          </>
        }

        {currentPage === totalPages ?
          <>
            <li className="page-item"><button className="page-link" onClick={() => { setPage(currentPage) }}>{currentPage - 2}</button></li>
            <li className="page-item"><button className="page-link" onClick={() => { setPage(currentPage) }}>{currentPage - 1}</button></li>
            <li className="page-item active"><button className="page-link" onClick={() => { setPage(currentPage) }}>{currentPage}</button></li>

          </> :
          <>
            <li className="page-item">
              <button className="page-link" onClick={nextPage} aria-label='Next'>
                <span aria-hidden="true">&gt;</span>
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" aria-label='Next' onClick={() => setPage(totalPages)}>
                <span aria-hidden="true">Last Page</span>
              </button>
            </li>
          </>
        }
      </ul>
    </nav >

  )
};

export default Pagination
