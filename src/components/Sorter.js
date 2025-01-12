import React from 'react';

function Sorter({
    sortNameOrder,
    setSortNameOrder,
    sortOriginOrder,
    setSortOriginOrder,
  }) {
    const handleSort = (field) => {
      if (field === 'name') {
        setSortNameOrder(sortNameOrder === 'asc' ? 'desc' : 'asc');
      } else if (field === 'origin.name') {
        setSortOriginOrder(sortOriginOrder === 'asc' ? 'desc' : 'asc');
      }
    };
  
    return (
      <div className="sorter">
        <button
          onClick={() => handleSort('name')}
          className={sortNameOrder ? 'active' : ''}
        >
          Sort By Name {sortNameOrder === 'asc' ? '↑' : '↓'}
        </button>
        <button
          onClick={() => handleSort('origin.name')}
          className={sortOriginOrder ? 'active' : ''}
        >
          Sort By Origin {sortOriginOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>
    );
}
  

export default Sorter;
