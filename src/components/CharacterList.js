import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Header from './Header';
import i18n from '../i18n';
import InfiniteScroll from 'react-infinite-scroll-component';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $status: String, $species: String) {
    characters(page: $page, filter: { status: $status, species: $species }) {
      info {
        next
      }
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        image
      }
    }
  }
`;

function CharacterList() {
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({ status: '', species: '' });
    const [sortByNameOrder, setByNameSortOrder] = useState('asc');
    const [sortByOriginOrder, setByOriginSortOrder] = useState('asc');
    const [characters, setCharacters] = useState([]);
  
    const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
      variables: { page, ...filters },
      fetchPolicy: 'network-only',
    });
  
    useEffect(() => {
      if (data && data.characters.results) {
        setCharacters((prev) => {
          const newCharacters = data.characters.results.filter(
            (character) => !prev.some((existing) => existing.id === character.id)
          );
          return [...prev, ...newCharacters];
        });
      }
    }, [data]);
  
    const loadMoreCharacters = () => {
      const nextPage = page + 1;
      if (data?.characters.info.next) {
        fetchMore({
          variables: { page: nextPage, ...filters },
        }).then((newData) => {
          setCharacters((prev) => {
            const newCharacters = newData.data.characters.results.filter(
              (character) => !prev.some((existing) => existing.id === character.id)
            );
            return [...prev, ...newCharacters];
          });
          setPage(nextPage);
        });
      }
    };
  
    if (loading && characters.length === 0) return <p>{i18n.t('Loading...')}</p>;
    if (error) return <p>{i18n.t('Error loading data')}</p>;
  
    
    const sortedData = [...characters].sort((a, b) => {
      if (sortByNameOrder !== sortByOriginOrder) {
        const fieldA = sortByNameOrder === 'asc' ? a.name : b.name;
        const fieldB = sortByNameOrder === 'asc' ? b.name : a.name;
        return fieldA.localeCompare(fieldB);
      } else {
        const fieldA = sortByOriginOrder === 'asc' ? a.origin.name : b.origin.name;
        const fieldB = sortByOriginOrder === 'asc' ? b.origin.name : a.origin.name;
        return fieldA.localeCompare(fieldB);
      }
    });
  
    return (
      <div>
        <Header
          filters={filters}
          setFilters={setFilters}
          sortNameOrder={sortByNameOrder}
          setSortNameOrder={setByNameSortOrder}
          sortOriginOrder={sortByOriginOrder}
          setSortOriginOrder={setByOriginSortOrder}
        />
        <InfiniteScroll
          dataLength={characters.length}
          next={loadMoreCharacters}
          hasMore={!!data?.characters.info.next}
          loader={<p>{i18n.t('Loading...')}</p>}
        >
          <div className="characters">
            {sortedData.map((character) => (
              <div key={character.id} className="character-card">
                <img src={character.image} alt={character.name} className="character-image" />
                <h2>{character.name}</h2>
                <p>{i18n.t('Status')}: {i18n.t(`${character.status}`)}</p>
                <p>{i18n.t('Species')}: {i18n.t(`${character.species}`)}</p>
                <p>{i18n.t('Gender')}: {i18n.t(`${character.gender}`)}</p>
                <p>{i18n.t('Origin')}: {character.origin.name}</p>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
  
export default CharacterList;
