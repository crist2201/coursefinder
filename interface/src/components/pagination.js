import React from 'react';
import '../stylesheets/pagination.css'

function Pagination({ currentPage, nextPage, prevPage, totalPages, setPage }) {

  const showPages = () => {
    let pages = [];
    if (currentPage === 1) {
      pages = [currentPage, currentPage + 1, currentPage + 2];
    } else if (currentPage === totalPages) {
      pages = [currentPage - 2, currentPage - 1, currentPage];
    } else {
      pages = [currentPage - 1, currentPage, currentPage + 1];
    }
    return pages.map(page => (
      <li className={`page-item ${currentPage === page ? 'active' : ''}`}><button className="page-link" onClick={() => { setPage(page) }}>{page}</button></li>
    ))
  }


  return (

    <nav>
      <ul className="pagination justify-content-center">

        < li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} id='prevPage'>
          <button className="page-link" aria-label='Next' onClick={() => setPage(1)}>
            <span aria-hidden="true">First Page</span>
          </button>
        </li>

        < li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={prevPage} aria-label='Previous'>
            <span aria-hidden="true">&lt;</span>
          </button>
        </li>

        {showPages()}

        < li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={nextPage} aria-label='Next'>
            <span aria-hidden="true">&gt;</span>
          </button>
        </li>

        < li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" aria-label='Next' onClick={() => setPage(totalPages)}>
            <span aria-hidden="true">Last Page</span>
          </button>
        </li>

      </ul>
    </nav>

  )
};

export default Pagination
