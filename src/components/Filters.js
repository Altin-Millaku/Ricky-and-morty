import React from 'react';
import { useTranslation } from 'react-i18next';

function Filters({ filters, setFilters }) {
  const { t } = useTranslation();

  return (
    <div className="filters">
      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">{t('All Status')}</option>
        <option value="alive">{t('Alive')}</option>
        <option value="dead">{t('Dead')}</option>
        <option value="unknown">{t('Unknown')}</option>
      </select>
      <select
        value={filters.species}
        onChange={(e) => setFilters({ ...filters, species: e.target.value })}
      >
        <option value="">{t('All Species')}</option>
        <option value="Human">{t('Human')}</option>
        <option value="Alien">{t('Alien')}</option>
      </select>
    </div>
  );
}

export default Filters;
