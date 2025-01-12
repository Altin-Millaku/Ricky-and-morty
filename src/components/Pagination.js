import React from 'react';

function Pagination({ page, hasNext, hasPrev, handleNextPage, handlePreviousPage }) {
  return (
    <div className="pagination">
      <button className='ArrowButton' disabled={!hasPrev} onClick={handlePreviousPage}>
        ←
      </button>
      <span style = {{color: "white"}}>Page {page}</span>
      <button className='ArrowButton' disabled={!hasNext} onClick={handleNextPage}>
        →
      </button>
    </div>
  );
}

export default Pagination;
