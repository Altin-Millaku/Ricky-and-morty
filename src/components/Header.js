import React from 'react';
import Filters from './Filters';
import Sorter from './Sorter';
import i18n from '../i18n';

function Header({
    filters,
    setFilters,
    sortNameOrder,
    setSortNameOrder,
    sortOriginOrder,
    setSortOriginOrder,
  }) {
    return (
      <header className="header">
        <h1 className="header-title">{i18n.t('Rick and Morty Characters')}</h1>
        <div className="header-controls">
          <div className="header-filters">
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          <div className="header-sorter">
            <Sorter
              sortNameOrder={sortNameOrder}
              setSortNameOrder={setSortNameOrder}
              sortOriginOrder={sortOriginOrder}
              setSortOriginOrder={setSortOriginOrder}
            />
          </div>
        </div>
      </header>
    );
  }

export default Header;
